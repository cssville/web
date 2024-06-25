import { Button } from "cssville-ui/build/components/ui/simple/Button";
import React, { ReactNode, useState } from 'react';

interface ColumnRenderers<T> {
  [key: string]: (item: T, index: number) => ReactNode;
}

interface TableProps<T> {
  data: T[];
  columnRenderers: ColumnRenderers<T>;
  initialVisibleRows?: number;
  loadMoreRows?: number;
}

const Table = <T,>({ data, columnRenderers, initialVisibleRows = 20, loadMoreRows = 20 }: TableProps<T>) => {
  const headers = Object.keys(columnRenderers);
  const [visibleRows, setVisibleRows] = useState(initialVisibleRows);

  const handleLoadMore = () => {
    setVisibleRows(prevVisibleRows => prevVisibleRows + loadMoreRows);
  };

  return (
    <>
      <table className="mar-y-4 wid-full bor-col-collapse">
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
          {data.slice(0, visibleRows).map((item, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="pad-3 bor-bot-1">
                  {columnRenderers[header](item, rowIndex)}
                </td>
              ))}
            </tr>
          ))}

          {visibleRows < data.length && (
            <tr>
              <td key={"load-more"} className="pad-3 bor-bot-1">
                <Button sm noShadow onClick={handleLoadMore}>
                  Load more...
                </Button>
              </td>
              <td className="pad-3 bor-bot-1"></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
