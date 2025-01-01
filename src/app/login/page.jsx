'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async () => {
        setLoading(true);
        setError("");

        // Add your login API call here
        try {
            // Simulate login request
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLoading(false);
            router.push("/dashboard");
        } catch (err) {
            setLoading(false);
            setError("Invalid email or password. Please try again.");
        }
    };

    const handleSocialLogin = (provider) => {
        // Add social login logic
        console.log(`Logging in with ${provider}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                        Log in to access your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {error && (
                        <Alert variant="destructive">
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={loading}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember-me" />
                            <label
                                htmlFor="remember-me"
                                className="text-sm text-gray-600 select-none"
                            >
                                Remember me
                            </label>
                        </div>
                        <Button variant="link" size="sm" className="text-sm">
                            Forgot password?
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button
                        className="w-full"
                        disabled={loading}
                        onClick={handleLogin}
                        variant={loading ? "secondary" : "default"}
                    >
                        {loading ? "Logging in..." : "Log In"}
                    </Button>
                    <Separator className="my-2" />
                    <div className="flex flex-col space-y-2">
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center space-x-2"
                            onClick={() => handleSocialLogin("Google")}
                        >
                            <FaGoogle className="w-4 h-4" />
                            <span>Log in with Google</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center space-x-2"
                            onClick={() => handleSocialLogin("Facebook")}
                        >
                            <FaFacebook className="w-4 h-4" />
                            <span>Log in with Facebook</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full flex items-center justify-center space-x-2"
                            onClick={() => handleSocialLogin("Github")}
                        >
                            <FaGithub className="w-4 h-4" />
                            <span>Log in with Github</span>
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
