import React from "react";
import useForm from "../hooks/useForm";

export default function Form() {
    // custom hook que vai ser responsável pela validação do form
    const {
        handleControlledInputsAndInstantValidation,
        handleOnBlurValidation,
        handleSubmit,
        values,
        errors,
    } = useForm();
    return (
        <div>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label className="form-label" htmlFor="name">
                        Full name:
                    </label>
                    <span id="name-icon" className="material-icons hidden-icon">
                        &#xe5ca;
                    </span>
                    <input
                        className="name-field field"
                        id="name"
                        name="name"
                        type="text"
                        onChange={handleControlledInputsAndInstantValidation}
                        onBlur={handleOnBlurValidation}
                        value={values.name}
                        required
                    />
                    <span
                        className={
                            errors.name ? "input-error-text" : "hidden-text"
                        }
                    >
                        {
                            errors.name ||
                                "hidden text " /* pra remover content shifting quando aparecer erros*/
                        }
                    </span>
                </div>
                <div className="input-wrapper">
                    <label className="form-label" htmlFor="birthdate">
                        Date of birth:
                    </label>
                    <input
                        className="date-field field"
                        id="birthdate"
                        type="hidden"
                    />
                    <select
                        id="day"
                        name="day"
                        className="field birthdate-field"
                        onChange={handleControlledInputsAndInstantValidation}
                        value={values.day}
                        required
                    >
                        <option value="">Day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                    <select
                        id="month"
                        name="month"
                        className="field birthdate-field"
                        onChange={handleControlledInputsAndInstantValidation}
                        value={values.month}
                        required
                    >
                        <option value="">Month</option>
                        <option value="Jan">Jan</option>
                        <option value="Fev">Fev</option>
                        <option value="Mar">Mar</option>
                        <option value="Abr">Abr</option>
                        <option value="Mai">Mai</option>
                        <option value="Jun">Jun</option>
                        <option value="Jul">Jul</option>
                        <option value="Ago">Ago</option>
                        <option value="Set">Set</option>
                        <option value="Out">Out</option>
                        <option value="Nov">Nov</option>
                        <option value="Dez">Dez</option>
                    </select>
                    <select
                        id="year"
                        name="year"
                        className="field birthdate-field"
                        onChange={handleControlledInputsAndInstantValidation}
                        value={values.year}
                        required
                    >
                        <option value="">Year</option>
                        <option value="1921">1921</option>
                        <option value="1922">1922</option>
                        <option value="1923">1923</option>
                        <option value="1924">1924</option>
                        <option value="1925">1925</option>
                        <option value="1926">1926</option>
                        <option value="1927">1927</option>
                        <option value="1928">1928</option>
                        <option value="1929">1929</option>
                        <option value="1931">1931</option>
                        <option value="1932">1932</option>
                        <option value="1933">1933</option>
                        <option value="1934">1934</option>
                        <option value="1935">1935</option>
                        <option value="1936">1936</option>
                        <option value="1937">1937</option>
                        <option value="1938">1938</option>
                        <option value="1939">1939</option>
                        <option value="1940">1940</option>
                        <option value="1941">1941</option>
                        <option value="1942">1942</option>
                        <option value="1943">1943</option>
                        <option value="1944">1944</option>
                        <option value="1945">1945</option>
                        <option value="1946">1946</option>
                        <option value="1947">1947</option>
                        <option value="1948">1948</option>
                        <option value="1949">1949</option>
                        <option value="1950">1950</option>
                        <option value="1951">1951</option>
                        <option value="1952">1952</option>
                        <option value="1953">1953</option>
                        <option value="1954">1954</option>
                        <option value="1955">1955</option>
                        <option value="1956">1956</option>
                        <option value="1957">1957</option>
                        <option value="1958">1958</option>
                        <option value="1959">1959</option>
                        <option value="1960">1960</option>
                        <option value="1961">1961</option>
                        <option value="1962">1962</option>
                        <option value="1963">1963</option>
                        <option value="1964">1964</option>
                        <option value="1965">1965</option>
                        <option value="1966">1966</option>
                        <option value="1967">1967</option>
                        <option value="1968">1968</option>
                        <option value="1969">1969</option>
                        <option value="1970">1970</option>
                        <option value="1971">1971</option>
                        <option value="1972">1972</option>
                        <option value="1973">1973</option>
                        <option value="1974">1974</option>
                        <option value="1975">1975</option>
                        <option value="1976">1976</option>
                        <option value="1977">1977</option>
                        <option value="1978">1978</option>
                        <option value="1979">1979</option>
                        <option value="1980">1980</option>
                        <option value="1981">1981</option>
                        <option value="1982">1982</option>
                        <option value="1983">1983</option>
                        <option value="1984">1984</option>
                        <option value="1985">1985</option>
                        <option value="1986">1986</option>
                        <option value="1987">1987</option>
                        <option value="1988">1988</option>
                        <option value="1989">1989</option>
                        <option value="1990">1990</option>
                        <option value="1991">1991</option>
                        <option value="1992">1992</option>
                        <option value="1993">1993</option>
                        <option value="1994">1994</option>
                        <option value="1995">1995</option>
                        <option value="1996">1996</option>
                        <option value="1997">1997</option>
                        <option value="1998">1998</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                    </select>
                    <span className="hidden-text">hidden text</span>
                </div>
                <div className="input-wrapper cpf-wrapper">
                    <label className="form-label" htmlFor="cpf">
                        CPF:
                    </label>

                    <span id="cpf-icon" className="material-icons hidden-icon">
                        &#xe5ca;
                    </span>
                    <input
                        className="cpf-field field"
                        id="cpf"
                        name="cpf"
                        type="text"
                        placeholder="Ex: 00000000000"
                        onBlur={handleOnBlurValidation}
                        onChange={handleControlledInputsAndInstantValidation}
                        value={values.cpf}
                        required
                    />
                    <span
                        className={
                            errors.cpf ? "input-error-text" : "hidden-text"
                        }
                    >
                        {
                            errors.cpf ||
                                "hidden text " /* pra remover content shifting quando aparecer erros*/
                        }
                    </span>
                </div>
                <hr />
                <div className="input-wrapper cep-wrapper">
                    <label className="form-label" htmlFor="cep">
                        Zipcode:
                    </label>
                    <span id="cep-icon" className="material-icons hidden-icon">
                        &#xe5ca;
                    </span>
                    <input
                        className="cep-field field"
                        id="cep"
                        name="cep"
                        placeholder="Ex: 12456789"
                        type="tel"
                        maxLength="12"
                        onBlur={handleOnBlurValidation}
                        onChange={handleControlledInputsAndInstantValidation}
                        value={values.cep}
                        required
                    />
                    <span
                        className={
                            errors.cep ? "input-error-text" : "hidden-text"
                        }
                    >
                        {
                            errors.cep ||
                                "hidden text " /* pra remover content shifting quando aparecer erros*/
                        }
                    </span>
                </div>
                <div className="input-wrapper">
                    <label className="form-label" htmlFor="address">
                        Address:
                    </label>
                    <span
                        id="address-icon"
                        className="material-icons hidden-icon"
                    >
                        &#xe5ca;
                    </span>
                    <input
                        className="address-field field"
                        id="address"
                        name="address"
                        onChange={handleControlledInputsAndInstantValidation}
                        onBlur={handleOnBlurValidation}
                        value={values.address}
                        required
                    />
                    <span
                        className={
                            errors.address ? "input-error-text" : "hidden-text"
                        }
                    >
                        {
                            errors.address ||
                                "hidden text " /* pra remover content shifting quando aparecer erros*/
                        }
                    </span>
                </div>
                <div className="input-wrapper">
                    <label className="form-label" htmlFor="district">
                        District:
                    </label>
                    <span
                        id="district-icon"
                        className="material-icons hidden-icon"
                    >
                        &#xe5ca;
                    </span>
                    <input
                        className="district-field field"
                        id="district"
                        name="district"
                        onChange={handleControlledInputsAndInstantValidation}
                        onBlur={handleOnBlurValidation}
                        value={values.district}
                        required
                    />
                    <span
                        className={
                            errors.district ? "input-error-text" : "hidden-text"
                        }
                    >
                        {
                            errors.district ||
                                "hidden text " /* pra remover content shifting quando aparecer erros*/
                        }
                    </span>
                </div>
                <div className="input-wrapper city-wrapper">
                    <label className="form-label" htmlFor="city">
                        City:
                    </label>
                    <input
                        className="city-field field"
                        id="city"
                        name="city"
                        value={values.city}
                        disabled
                    />
                </div>
                <div className="input-wrapper state-wrapper">
                    <label className="form-label" htmlFor="state">
                        State:
                    </label>
                    <input
                        className="state-field field"
                        id="state"
                        name="state"
                        value={values.state}
                        disabled
                    />
                </div>
                <div className="form-btn-wrapper">
                    <button className="btn">Criar cadastro</button>
                </div>
            </form>
        </div>
    );
}