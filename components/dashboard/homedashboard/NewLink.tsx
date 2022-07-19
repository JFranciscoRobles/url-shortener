import React from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import axios from "axios";

export default function App() {
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);

	const closeHandler = () => {
		setVisible(false);
		console.log("closed");
	};

	function postLink() {
		axios.post("/api/links", {
			name: "Fred",
			urlPath: "Flintstone"
		})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<>
			<Button size={"sm"} auto onClick={handler}>
				New Link
			</Button>
			<Modal
				aria-labelledby="modal-title"
				open={visible}
				closeButton
				onClose={closeHandler}
			>
				<Modal.Header>
					<Text id="modal-title" size={18}>
						Generar un nuevo enlace.
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input
						color="primary"
						labelLeft="Nombre"
						placeholder="Campaña Junio 2018"
						size="md"
						clearable
						fullWidth
					/>
					<Input
						color="primary"
						labelLeft="Enlace"
						placeholder="https://www.hprul.com"
						size="md"
						clearable
						fullWidth
					/>
				
				</Modal.Body>
				<Modal.Footer>
					<Button color="error" auto flat onClick={closeHandler}>
						Cerrar
					</Button>
					<Button auto onClick={postLink}>
						Crear
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}