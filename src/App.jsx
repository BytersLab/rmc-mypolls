import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import "./App.css";

const data = [
  {
    name: "Spiderman 1",
    value: 1,
  },
  {
    name: "Harry Potter 5",
    value: 1,
  },
  {
    name: "Herr der Ringe 2",
    value: 1,
  },
];

function App() {
  return (
    <>
      <h1>Hello MyPolls</h1>
      <ResponsiveContainer width={"100%"} height={500}>
        <BarChart data={data} margin={{ bottom: 120, right: 20 }}>
          <Bar dataKey="value" fill="#8884d8" />
          <XAxis dataKey={"name"} interval={0} angle={-10} dy={32} />
        </BarChart>
      </ResponsiveContainer>
      {data.map((item, index) => {
        return <button key={index}>{item.name}</button>;
      })}
    </>
  );
}

export default App;
