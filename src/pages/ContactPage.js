import { Container, Button } from "react-bootstrap";
export default function ContactPage() {
    return (
        <>
            <header className="p-5 mb-4 bg-light">
                <Container className="py-5">
                    <h1 className="display-5 fw-bold">Contact Page</h1>
                    <p className="col-md-8 fs-4">This is a Single Page App starter template with React and the UI Library Bootstrap.</p>
                    <p>Go to the React Bootstrap Docs.</p>
                    <Button variant="primary" size="lg">
                        Example button
                    </Button>
                </Container>
            </header>
        </>
    );
}
