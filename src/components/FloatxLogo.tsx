export function FloatxLogo({ 
  className = "", 
  variant = "black" 
}: { 
  className?: string;
  variant?: "white" | "black";
}) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={variant === "white" ? "images/logo_white.svg" : "images/logo_black.svg"} 
        alt="FloatX Logo" 
        className="h-9 w-auto object-contain"
      />
    </div>
  );
}
