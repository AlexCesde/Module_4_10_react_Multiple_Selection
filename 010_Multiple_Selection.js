import React, { useState } from 'react';

const handleSubmit = (event) => {
    alert(event.target.innerHTML);
    event.preventDefault();
}

function MultipleSelection(props) {

    const [possessions, setPossessions] = useState([]);
    const [studies, setStudies] = useState([]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div><label>Possessions</label></div>
                <div>
                    <select multiple onChange={(event) => {
                        const list = event.target.selectedOptions;
                        let possessions = [];
                        possessions = Object.keys(list).map(index => list[index].value);

                        setPossessions(possessions);
                    }}>
                        <option value="101">Smart Pnone</option>
                        <option value="102">Tablet</option>
                        <option value="103">PC</option>
                        <option value="104">Laptop</option>
                    </select>
                </div>
                <br></br>
                <div><label>Studies</label></div>
                <div>
                    <div>
                        <input type="checkbox" id="s_primary"
                            value="s_primary"
                            checked={studies.indexOf("s_primary") !== -1}
                            onChange={(event) => {
                                const target = event.target;
                                let studies_in = studies;
                                if (target.checked) {
                                    studies.push(target.value);
                                } else {
                                    studies.splice(studies.indexOf(target.value), 1);
                                }
                                setStudies(studies_in);
                            }} />
                        <label htmlFor="s_primary">
                            Primary
                        </label>
                        <input type="checkbox" id="s_bachelor"
                            value="s_bachelor"
                            checked={studies.indexOf("s_bachelor") !== -1}
                            onChange={(event) => {
                                const target = event.target;
                                let studies_in = studies;
                                if (target.checked) {
                                    studies.push(target.value);
                                } else {
                                    studies.splice(studies.indexOf(target.value), 1);
                                }
                                setStudies(studies_in);
                            }} />
                        <label htmlFor="s_bachelor">
                            Bachelor
                        </label>
                        <input type="checkbox" id="s_master"
                            value="s_master"
                            checked={studies.indexOf("s_master") !== -1}
                            onChange={(event) => {
                                const target = event.target;
                                let studies_in = studies;
                                if (target.checked) {
                                    studies.push(target.value);
                                } else {
                                    studies.splice(studies.indexOf(target.value), 1);
                                }
                                setStudies(studies_in);
                            }} />
                        <label htmlFor="s_master">
                            Master
                        </label>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
            <div>Pos: {Object.keys(possessions).map(key => {
                <span key={key}>{possessions[key]}</span>
            })}</div>
            <div>Studies: {Object.keys(studies).map(key => {
                <span key={key}>{studies[key]}</span>
            })}</div>
        </>
    );
}

export default MultipleSelection;