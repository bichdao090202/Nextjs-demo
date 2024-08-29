export default function Layout({ children }) {
    return (
        <div className="flex h-screen flex-col bg-gray-50">
            <div className="flex justify-center p-6">{children}</div>
            <div className="flex justify-center mt-auto p-6 bg-green-600">Dao Thi Ngoc Bich</div>
        </div>
    );
}
