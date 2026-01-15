"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ServicePage from "@/components/Service/ServicePage";

export default function Page() {
  const params = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  if (!services) return null;
  const { slug } = params;

  const currentService = services?.find((b) => b.slug === slug);

  return (
    <div className="mt-35">
      {currentService && <ServicePage service={currentService} />}
    </div>
  );
}
