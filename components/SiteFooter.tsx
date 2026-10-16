const PATENTS: { title: string; number: string; date: string; href?: string }[] = [
  {
    title: 'ARC: Agentic Control Layer for Enhanced Memory Management and Data Security',
    number: 'US 2026/0310809 A1',
    date: 'October 8, 2026',
    href: 'https://patents.justia.com/patent/20260310809',
  },
  {
    title: 'DS: Multi-Agent Artificial Intelligence Deadlock Detection and Resolution',
    number: 'US 2026/0310934 A1',
    date: 'October 8, 2026',
    href: 'https://patents.justia.com/patent/20260310934',
  },
  {
    title: 'LRC: Runtime Control of Internal Activation Pathways in Artificial Neural Networks',
    number: 'US 2026/0310948 A1',
    date: 'October 8, 2026',
    href: 'https://patents.justia.com/patent/20260310948',
  },
];

export function SiteFooter() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center pb-[17px] md:pb-[24px] pt-0 px-[17px] md:px-[24px] relative shrink-0 w-full">
      <div className="flex items-center gap-[12px] w-full max-w-[720px]">
        <div className="h-px flex-1 min-w-[24px] bg-[#c8c9cc]" aria-hidden="true" />
        <p className="font-sans font-normal leading-[21px] relative shrink-0 text-[#4e4e4e] text-[13px] text-center whitespace-nowrap">
          © 2026 Adaptablox. Patents Pending.
        </p>
        <div className="h-px flex-1 min-w-[24px] bg-[#c8c9cc]" aria-hidden="true" />
      </div>
      <div className="w-full max-w-[720px] overflow-x-auto">
        <table className="w-full border-collapse font-sans text-[12px] leading-[18px] text-[#4e4e4e] text-left">
          <thead>
            <tr className="border-b border-[#d5d8de]">
              <th className="font-[590] pb-[6px] pr-[12px] align-bottom">Official Patent Title</th>
              <th className="font-[590] pb-[6px] pr-[12px] align-bottom whitespace-nowrap">Publication Number</th>
              <th className="font-[590] pb-[6px] align-bottom whitespace-nowrap">Publication Date</th>
            </tr>
          </thead>
          <tbody>
            {PATENTS.map((patent) => (
              <tr key={patent.number} className="border-b border-[#e8ebf0] last:border-b-0">
                <td className="py-[7px] pr-[12px] align-top">{patent.title}</td>
                <td className="py-[7px] pr-[12px] align-top whitespace-nowrap">
                  {patent.href ? (
                    <a
                      href={patent.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-[#2a2a2a]"
                    >
                      {patent.number}
                    </a>
                  ) : (
                    patent.number
                  )}
                </td>
                <td className="py-[7px] align-top whitespace-nowrap">{patent.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
