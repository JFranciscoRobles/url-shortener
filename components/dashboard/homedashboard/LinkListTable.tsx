import { Table } from "@nextui-org/react";
import React from "react";

function LinkListTable() {
	return (
		<Table
			aria-label="Links Table"
			css={{
				height: "auto",
				minWidth: "60vw",
			}}
			selectionMode="single"
		>
			<Table.Header>
				<Table.Column>DATE</Table.Column>
				<Table.Column>NAME</Table.Column>
				<Table.Column>Clicks</Table.Column>
			</Table.Header>
			<Table.Body>
				<Table.Row key="1">
					<Table.Cell>Tony Reichert</Table.Cell>
					<Table.Cell>CEO</Table.Cell>
					<Table.Cell>2</Table.Cell>
				</Table.Row>
				<Table.Row key="2">
					<Table.Cell>Zoey Lang</Table.Cell>
					<Table.Cell>Technical Lead</Table.Cell>
					<Table.Cell>2</Table.Cell>
				</Table.Row>
				<Table.Row key="3">
					<Table.Cell>Jane Fisher</Table.Cell>
					<Table.Cell>Senior Developer</Table.Cell>
					<Table.Cell>2</Table.Cell>
				</Table.Row>
				<Table.Row key="4">
					<Table.Cell>William Howard</Table.Cell>
					<Table.Cell>Community Manager	</Table.Cell>
					<Table.Cell>2</Table.Cell>
				</Table.Row>
				<Table.Row key="5">
					<Table.Cell>William Howard</Table.Cell>
					<Table.Cell>Community Manager</Table.Cell>
					<Table.Cell>2</Table.Cell>
				</Table.Row>
				<Table.Row key="6">
					<Table.Cell>William Howard</Table.Cell>
					<Table.Cell>Community Manager</Table.Cell>
					<Table.Cell>2</Table.Cell>
				</Table.Row>
				<Table.Row key="7">
					<Table.Cell>William Howard</Table.Cell>
					<Table.Cell>Community Manager</Table.Cell>
					<Table.Cell>2</Table.Cell>
				</Table.Row>
				<Table.Row key="8">
					<Table.Cell>William Howard</Table.Cell>
					<Table.Cell>Community Manager</Table.Cell>
					<Table.Cell>2</Table.Cell>
				</Table.Row>
				<Table.Row key="9">
					<Table.Cell>William Howard</Table.Cell>
					<Table.Cell>Community Manager</Table.Cell>
					<Table.Cell>2</Table.Cell>
				</Table.Row>
				<Table.Row key="10">
					<Table.Cell>William Howard</Table.Cell>
					<Table.Cell>Community Manager</Table.Cell>
					<Table.Cell>2</Table.Cell>
				</Table.Row>
			</Table.Body>
			<Table.Pagination
				align="center"
				rowsPerPage={8}
				noMargin
				shadow
				onPageChange={(page) => console.log({ page })}
			/>
		</Table>
	);
}

export default LinkListTable;