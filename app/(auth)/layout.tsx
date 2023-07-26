const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        //Sign-In Page is centered
        <div className = "flex items-center justify-center h-full">
            {children}
        </div>
    );
}

export default AuthLayout;