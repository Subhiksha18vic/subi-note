import Button from "@material-ui/core/Button";

export default function Login() {
    return(
        <div className="container d-flex align-items-center justify-content-center flex-column"
        style={{minHeight: "100vh"}}
        >
            <h2 className="mb-4">Subi Notebook</h2>
            <Button 
            variant="contained"
            color="primary"
            style={{ textTransform: "capitalixe" }}
            >
                Sign in with Google
                </Button>
        </div>
    );
}