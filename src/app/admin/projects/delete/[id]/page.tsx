"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";

export default function DeleteProjectPage() {
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const deleteProject = async () => {
      await supabase.from("projects").delete().eq("id", id);
      router.push("/admin/projects");
    };
    deleteProject();
  }, [id, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <p>Deleting project...</p>
    </div>
  );
}
