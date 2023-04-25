import Table from 'react-bootstrap/Table';
import { PROFIT_TABLE } from '../../constans';

const Profits = ({ profits: { profits, totalProfit } }) =>
  profits.length ? (
    <Table
      striped
      bordered
      hover
      className='m-0'
    >
      <thead>
        <tr>
          {Object.values(PROFIT_TABLE.HEADERS).map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {profits.concat([{ totalProfit }]).map((profit) =>
          profit.id ? (
            <tr key={profit.id}>
              {Object.keys(PROFIT_TABLE.HEADERS).map((key) => (
                <td key={key}>{profit[key]}</td>
              ))}
            </tr>
          ) : (
            <tr key={profit.totalProfit}>
              <td colSpan={2}>{PROFIT_TABLE.SUMMARY}</td>
              <td>{profit.totalProfit}</td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  ) : (
    <p className='text-center m-0'>
      Obecnie nie dodano jeszcze żadnych wkładów
    </p>
  );

export default Profits;
