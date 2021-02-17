import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const ModalSkillsDetail = (props) => {
	const { isOpen, toggle, className, skillName, score } = props;
	// console.log(isOpen);
	return (
		<Modal isOpen={isOpen} toggle={toggle} className={className}>
			<ModalHeader toggle={toggle}>Modal title</ModalHeader>
			<ModalBody>
				skillName: {skillName} score: {score}{" "}
			</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={toggle}>
					Do Something
				</Button>{" "}
				<Button color="secondary" onClick={toggle}>
					Cancel
				</Button>
			</ModalFooter>
		</Modal>
	);
};
