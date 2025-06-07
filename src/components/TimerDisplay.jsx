const TimerDisplay = ({ time, progress }) => {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center rounded-full bg-surface">
      <div 
        className="absolute inset-0 rounded-full" 
        style={{
          background: `conic-gradient(var(--accent-primary) ${progress * 3.6}deg, var(--bg-elevated) ${progress * 3.6}deg)`
        }}
      ></div>
      <div className="relative text-text-primary text-5xl font-bold z-10">
        {time}
      </div>
    </div>
  );
};

export default TimerDisplay;