
const layout = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            <h2>Login here</h2>
            {children}
        </div>
    );
};

export default layout;