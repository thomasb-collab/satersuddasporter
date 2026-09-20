import { useEffect, useState } from "react";

// Säter, Dalarna
const LAT = 60.35;
const LON = 15.75;

type StatusLevel = "good" | "caution" | "bad";

interface Status {
  level: StatusLevel;
  text: string;
}

interface CurrentWeather {
  temperature: number;
  precipitation: number;
  weatherCode: number;
}

const SNOW_CODES = new Set([71, 73, 75, 77, 85, 86]);
const FREEZING_CODES = new Set([56, 57, 66, 67]);

const getStatus = ({ temperature, precipitation, weatherCode }: CurrentWeather): Status => {
  if (SNOW_CODES.has(weatherCode) || FREEZING_CODES.has(weatherCode)) {
    return { level: "bad", text: "Snö/is i parken just nu — troligen inte åkbart" };
  }
  if (precipitation > 0.2) {
    return { level: "caution", text: "Vått i parken just nu — var extra försiktig" };
  }
  if (temperature <= 1) {
    return { level: "caution", text: "Kallt ute — risk för halka, kolla själv innan du åker" };
  }
  return { level: "good", text: "Torrt och fint väder — kör på!" };
};

const levelStyles: Record<StatusLevel, { border: string; text: string; icon: string }> = {
  good: { border: "border-sus-yellow/40", text: "text-sus-yellow", icon: "☀️" },
  caution: { border: "border-sus-yellow/40", text: "text-sus-yellow", icon: "⚠️" },
  bad: { border: "border-sus-red/50", text: "text-sus-red", icon: "❄️" },
};

const WeatherStatus = () => {
  const [status, setStatus] = useState<Status | null>(null);
  const [temp, setTemp] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,precipitation,weather_code&timezone=Europe%2FStockholm`
        );
        if (!res.ok) throw new Error("weather fetch failed");
        const data = await res.json();
        if (cancelled) return;
        const current: CurrentWeather = {
          temperature: data.current.temperature_2m,
          precipitation: data.current.precipitation,
          weatherCode: data.current.weather_code,
        };
        setTemp(Math.round(current.temperature));
        setStatus(getStatus(current));
      } catch {
        if (!cancelled) setFailed(true);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (failed || !status) return null;

  const styles = levelStyles[status.level];

  return (
    <div
      className={`inline-flex items-center gap-3 bg-card border ${styles.border} rounded-lg px-5 py-3`}
    >
      <span className="text-2xl leading-none" aria-hidden="true">
        {styles.icon}
      </span>
      <div>
        <p className={`text-sm font-medium ${styles.text}`}>{status.text}</p>
        {temp !== null && (
          <p className="text-xs mt-0.5" style={{ color: "rgba(245,240,232,0.5)" }}>
            {temp}° i Säter just nu
          </p>
        )}
      </div>
    </div>
  );
};

export default WeatherStatus;
