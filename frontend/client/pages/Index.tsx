import type { FC } from "react";

interface ScheduleItem {
  title: string;
  start: string;
  end: string;
}

const upcomingMeetings: ScheduleItem[] = [
  { title: "Meeting", start: "9:30 AM", end: "10:00 AM" },
  { title: "Matt / Peter 1:1", start: "11:30 AM", end: "12:00 PM" },
  { title: "Lily / Matt 1:1", start: "12:00 PM", end: "12:30 PM" },
];

const roomName = "Morrison";
const displayTime = "6:34 PM";
const sharingKey = "QXRKWA";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1020] via-[#152040] to-[#050810] text-white">
      <div className="flex min-h-screen flex-col px-16 py-12">
        <TopBar room={roomName} time={displayTime} sharingKey={sharingKey} />
        <main className="flex flex-1 items-center justify-center">
          <ScheduleCard items={upcomingMeetings} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

const TopBar: FC<{ room: string; time: string; sharingKey: string }> = ({
  room,
  time,
  sharingKey,
}) => (
  <header className="flex items-start justify-between text-sm font-medium uppercase tracking-[0.32em] text-white/60">
    <span className="tracking-[0.2em] text-white/50">{room}</span>
    <span className="text-[2.75rem] font-semibold leading-none tracking-tight text-white normal-case">
      {time}
    </span>
    <span className="flex items-center gap-3 text-xs tracking-[0.4em] text-white/50">
      <span className="hidden lg:inline">Sharing key</span>
      <span className="text-white/80">{sharingKey}</span>
    </span>
  </header>
);

const ScheduleCard: FC<{ items: ScheduleItem[] }> = ({ items }) => (
  <section className="w-full max-w-3xl rounded-[36px] border border-white/10 bg-white/5 p-2 shadow-[0_48px_120px_rgba(4,8,20,0.65)] backdrop-blur-3xl">
    <div className="rounded-[30px] border border-white/8 bg-white/5">
      <header className="border-b border-white/10 px-12 py-7">
        <span className="text-[0.9rem] font-semibold uppercase tracking-[0.6em] text-white/50">
          Coming Up
        </span>
      </header>
      <div className="divide-y divide-white/10">
        {items.map((item, index) => (
          <ScheduleRow key={item.title + item.start} item={item} isLast={
            index === items.length - 1
          } />
        ))}
      </div>
    </div>
  </section>
);

const ScheduleRow: FC<{ item: ScheduleItem; isLast: boolean }> = ({
  item,
  isLast,
}) => (
  <div
    className={`flex flex-col gap-3 px-12 py-9 transition-colors ${
      isLast ? "rounded-b-[30px]" : ""
    }`}
  >
    <h3 className="text-[2.1rem] font-semibold leading-tight text-white">
      {item.title}
    </h3>
    <p className="text-lg font-medium tracking-wide text-white/60">
      {item.start} - {item.end}
    </p>
  </div>
);

const Footer: FC = () => (
  <footer className="flex items-center justify-between pt-12 text-white/50">
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[1.1rem] font-semibold tracking-[0.3em] text-white/70">
        E
      </div>
      <span className="text-lg tracking-[0.35em] uppercase">Envoy</span>
    </div>
    <span className="text-xs uppercase tracking-[0.5em] text-white/30">&nbsp;</span>
  </footer>
);
