"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {

    const router = useRouter();
  const handleOnClick = () => {
      console.log('hii');
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>{children}</span>;
  }
  return (
    <span onClick={handleOnClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
