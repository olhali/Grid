import React from 'react';

const Grid = ({config, data}) => (
    <table>
        <thead>
        <tr>
            {
                config.map((configItem) =>
                    <th key={configItem.field}>{configItem.title}</th>
                )}
        </tr>
        </thead>
        <tbody>
        {
            data.map((dataItem) =>
                <tr key={dataItem.imdbID}>
                    {config.map((configItem) => {
                        if (configItem.component != undefined) {
                            return <td>
                                {React.createElement(configItem.component, {
                                    data: dataItem[configItem.field]
                                })}
                            </td>
                        } else {
                            return <td key={configItem.field}>{dataItem[configItem.field]}</td>;
                        }
                    }
                    )}
                </tr>
            )
        }
        </tbody>
    </table>
);

export default Grid;