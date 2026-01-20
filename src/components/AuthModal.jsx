import { useState } from "react";

export default function AuthModal({ isOpen, onClose }) {
    const [isLogin, setIsLogin] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl w-[90%] max-w-md p-6 relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-xl font-bold"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold text-center mb-4">
                    {isLogin ? "Login" : "Sign Up"}
                </h2>

                <form className="space-y-4">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border p-3 rounded"
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-3 rounded"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-3 rounded"
                    />

                    <button className="w-full bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600">
                        {isLogin ? "Login" : "Create Account"}
                    </button>
                </form>

                <p className="text-center mt-4 text-sm">
                    {isLogin ? "New here?" : "Already have an account?"}{" "}
                    <button
                        className="text-orange-500 font-semibold"
                        onClick={() => setIsLogin(!isLogin)}
                    >
                        {isLogin ? "Sign up" : "Login"}
                    </button>
                </p>
            </div>
        </div>
    );
}
