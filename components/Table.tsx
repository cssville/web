import React, { ReactNode } from 'react';

interface TableProps<T> {
  headers: string[];
  data: T[];
  renderRow: (item: T, index: number) => ReactNode;
}

const Table = <T,>({ headers, data, renderRow }: TableProps<T>) => {
  return (
    <table className="mar-y-4 wid-full bor-col-collapse bor-1">
      <thead>
        <tr className="bac-col-grey-100">
          {headers.map((header, index) => (
            <th key={index} className="pad-4 tex-ali-start">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => renderRow(item, index))}
      </tbody>
    </table>
  );
};

export default Table;
