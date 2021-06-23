import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const useForm = () => {
    let history = useHistory();
    const [values, setValues] = useState({
        name: "",
        day: "",
        month: "",
        year: "",
        cpf: "",
        cep: "",
        address: "",
        district: "",
        city: "",
        state: "",
    });
    const [errors, setErrors] = useState({});

    const handleControlledInputsAndInstantValidation = (e) => {
        const { name, value, style } = e.target;
        setValues({
            ...values,
            [name]: value,
        });

        const currentInputValidIcon = document.getElementById(name + "-icon");
        switch (name) {
            case "name":
                if (value.length > 3) {
                    currentInputValidIcon.style.display = "inline";
                    style.border = "1px solid limegreen";
                    setErrors({ ...errors, name: "" });
                } else {
                    currentInputValidIcon.style.display = "none";
                    style.border = "";
                }
                break;
            case "cpf":
                if (value.length > 10) {
                    if (cpfValidator(value)) {
                        currentInputValidIcon.style.display = "inline";
                        style.border = "1px solid limegreen";
                        setErrors({ ...errors, cpf: "" });
                    } else {
                        currentInputValidIcon.style.display = "none";
                        style.border = "1px solid red";
                        setErrors({ ...errors, cpf: "Invalid CPF" });
                    }
                }
                break;
            case "address":
                if (value.length > 4) {
                    currentInputValidIcon.style.display = "inline";
                    style.border = "1px solid limegreen";
                    setErrors({ ...errors, address: "" });
                }
                break;
            case "district":
                if (value.length > 4) {
                    currentInputValidIcon.style.display = "inline";
                    style.border = "1px solid limegreen";
                    setErrors({ ...errors, district: "" });
                }
                break;
            default:
                break;
        }
    };

    const handleOnBlurValidation = (e) => {
        const { name, value, style } = e.target;
        switch (name) {
            case "name":
                if (value.length < 4) {
                    style.border = "1px solid red";
                    setErrors({ ...errors, name: "Insufficient characters" });
                }
                break;
            case "cpf":
                if (value.length < 11) {
                    style.border = "1px solid red";
                    document.getElementById("cpf-icon").style.display = "none";
                    setErrors({
                        ...errors,
                        cpf: "Insufficient characters for a valid CPF",
                    });
                } else {
                }
                break;
            case "cep":
                if (value.length !== 8) {
                    style.border = "1px solid red";
                    document.getElementById("cep-icon").style.display = "none";
                    setErrors({
                        ...errors,
                        cep: "Invalid CEP",
                    });
                }
                break;
            case "address":
                if (value.length < 4) {
                    style.border = "1px solid red";
                    setErrors({
                        ...errors,
                        address: "Insufficient characters",
                    });
                }
                break;
            case "district":
                if (value.length < 4) {
                    style.border = "1px solid red";
                    setErrors({
                        ...errors,
                        district: "Insufficient characters",
                    });
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // só continua se não há nenhum erro (proveniente das validações) no objeto 'errors'
        if (Object.values(errors).every((error) => !error)) {
            // guarda informações no local storage
            localStorage.setItem(
                "@frontend-test/userInfo",
                JSON.stringify(values)
            );

            // guarda informações nos cookies
            Object.entries(values).forEach((value) => {
                document.cookie = `${value[0]}=${value[1]}`;
            });
            // volta dinamicamente para homepage
            history.push("/");
        }
    };

    // use effect hook para o fetch da api do correios (viacep)
    useEffect(() => {
        if (values.cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${values.cep}/json/`, {})
                .then((res) => res.json())
                .then((data) => {
                    if (data.erro) {
                        document.getElementById("cep-icon").style.display =
                            "none";
                        document.getElementById("cep").style.border =
                            "1px solid red";
                        setErrors({
                            ...errors,
                            cep: "Invalid CEP",
                        });
                        return;
                    }
                    setValues({
                        ...values,
                        address: data.logradouro,
                        city: data.localidade,
                        state: data.uf,
                        district: data.bairro,
                    });

                    document.getElementById("cep-icon").style.display =
                        "inline";
                    document.getElementById("cep").style.border =
                        "1px solid limegreen";
                    setErrors({ ...errors, cep: "" });
                })
                .catch((err) => console.log("Erro ao utilizar a API"));
        }
    }, [values.cep]);

    //Verifica se CPF é válido
    function cpfValidator(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF.length > 11) return false;
        if (strCPF === "00000000000") return false;
        for (let i = 1; i <= 9; i++)
            Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        if (Resto === 10 || Resto === 11) Resto = 0;
        if (Resto !== parseInt(strCPF.substring(9, 10))) return false;
        Soma = 0;
        for (let i = 1; i <= 10; i++)
            Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
        if (Resto === 10 || Resto === 11) Resto = 0;
        if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
        return true;
    }

    return {
        handleControlledInputsAndInstantValidation,
        handleOnBlurValidation,
        handleSubmit,
        values,
        errors,
    };
};

export default useForm;
