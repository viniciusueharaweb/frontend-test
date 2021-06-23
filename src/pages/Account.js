import Navigation from "../components/Navigation";

export default function Account() {
    // parsasr o json do localstorage pra colocar na tabela
    const localStorageInfos = JSON.parse(
        localStorage.getItem("@frontend-test/userInfo")
    );
    const { name, day, month, year, cpf, cep, address, district, city, state } =
        localStorageInfos;

    // obter valores pelos cookies setados ao registrar e colocar na tabela
    const cookieValue = document.cookie.split("; ");
    const cookieInfos = {};
    cookieValue.forEach((info) => {
        const [a, b] = info.split("=");
        cookieInfos[a + "2"] = b;
    });
    const {
        name2,
        day2,
        month2,
        year2,
        cpf2,
        cep2,
        address2,
        district2,
        city2,
        state2,
    } = cookieInfos;

    return (
        <div className="common-bg">
            <div className="container">
                <Navigation />
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">LocalStorage information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Day</td>
                            <td>{day}</td>
                        </tr>
                        <tr>
                            <td>Month</td>
                            <td>{month}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{year}</td>
                        </tr>
                        <tr>
                            <td>CPF</td>
                            <td>{cpf}</td>
                        </tr>
                        <tr>
                            <td>CEP</td>
                            <td>{cep}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{address}</td>
                        </tr>
                        <tr>
                            <td>District</td>
                            <td>{district}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{state}</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">Cookies information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{name2}</td>
                        </tr>
                        <tr>
                            <td>Day</td>
                            <td>{day2}</td>
                        </tr>
                        <tr>
                            <td>Month</td>
                            <td>{month2}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{year2}</td>
                        </tr>
                        <tr>
                            <td>CPF</td>
                            <td>{cpf2}</td>
                        </tr>
                        <tr>
                            <td>CEP</td>
                            <td>{cep2}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{address2}</td>
                        </tr>
                        <tr>
                            <td>District</td>
                            <td>{district2}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{city2}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{state2}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
