interface RoomCodeBadgeProps {
  code: string;
}

export function RoomCodeBadge({ code }: RoomCodeBadgeProps) {
  return (
    <div className="room-code-badge">
      <span className="room-code-badge__label">Room Code</span>
      <span className="room-code-badge__code">{code}</span>
      <span className="room-code-badge__hint">Share this code with friends to join</span>
    </div>
  );
}
