import { Link } from "react-router-dom";
import { THREAT_MODEL_ROUTE } from "../lib/privacyThreatModel";

type PrivacyWarningCalloutProps = {
  message: string;
  className?: string;
};

export function PrivacyWarningCallout({ message, className = "" }: PrivacyWarningCalloutProps) {
  return (
    <div
      className={`rounded-xl border border-neutral-500/30 bg-neutral-950/20 px-4 py-3 text-sm text-neutral-200/90 ${className}`}
      role="note"
    >
      <p className="leading-relaxed">
        <span className="font-semibold text-neutral-300">Privacy note: </span>
        {message}{" "}
        <Link
          to={THREAT_MODEL_ROUTE}
          className="font-medium text-neutral-300 underline hover:text-neutral-200"
        >
          Threat model
        </Link>
      </p>
    </div>
  );
}
