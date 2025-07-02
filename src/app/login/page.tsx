"use client";

import { useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-helvetica">
      {/* Kiri - Ilustrasi */}
      <div className="hidden lg:flex items-center justify-center w-full lg:w-1/2 bg-zinc-900">
        <Image
          src="/images/login_illustration.jpg"
          alt="Login Illustration"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Kanan - Form Login */}
      <div className="flex items-center justify-center w-full lg:w-1/2 bg-black text-white p-8">
        <div className="bg-zinc-900 w-full max-w-lg p-10 rounded-2xl shadow-2xl">
          <h1 className="text-3xl font-bold mb-8 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 bg-zinc-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 bg-zinc-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-primary py-3 rounded-lg text-white text-sm font-semibold hover:bg-primary/80 transition"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center items-center pt-6 text-primary font-semibold underline underline-offset-4 hover:no-underline hover:text-white transition-all duration-300 ">
            <Link href="/">
              <span>Back to Protfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
