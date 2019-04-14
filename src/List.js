import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask = _id => {
    this.props.handleDelete(_id);
  };

  render() {
    const { tasks } = this.props;

    const list = tasks.map((row, index) => {
      const rowindex = `TableRow-${index}`;

      return (
        <TableRow key={rowindex}>
          <TableCell>{row.task}</TableCell>
          <TableCell>{row.date}</TableCell>
          <TableCell>
            <Checkbox onChange={this.deleteTask(row._id)} />
          </TableCell>
        </TableRow>
      );
    });

    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{list}</TableBody>
        </Table>
      </div>
    );
  }
}
