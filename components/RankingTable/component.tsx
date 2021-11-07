import React from "react";
import { TableProps } from './props';

export function RankingTable<AvoidShadowedGenericdata>({ columns, data }: TableProps<AvoidShadowedGenericdata>) {
    return (
        <table>
            <thead>
            {
                columns.map((c, i) => <th key={i} style={{ color: 'white' }}>{c}</th>)
            }
            </thead>
            {
                data.map((row, i) => <tr key={i} style={{ color: 'white' }}>{
                    columns.map((c, i) => (<th key={i} style={{ color: 'white' }}>{row[c]}</th>))
                }</tr>)
            }
        </table>
    );
};
