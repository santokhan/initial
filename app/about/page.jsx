const Welcome = ({ name }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-2">
            <h1 className="text-3xl font-bold">Hello, {name}!</h1>
            <p className="text-2xl">Wellcome to the NEXT JS project.</p>
        </div>
    );
};

export default Welcome;
