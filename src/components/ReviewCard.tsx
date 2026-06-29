import { Star, BadgeCheck } from "lucide-react";

interface Props {
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified?: boolean;
}

export default function ReviewCard({
  name,
  rating,
  date,
  comment,
  verified,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-slate-800 text-sm">{name}</span>
            {verified && (
              <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-medium">
                <BadgeCheck size={14} />
                Verified Purchase
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < rating
                      ? "text-amber-400 fill-amber-400"
                      : "text-gray-200 fill-gray-200"
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <span className="text-xs text-slate-400 whitespace-nowrap">{date}</span>
      </div>

      {/* Comment */}
      <p className="text-sm text-slate-600 leading-relaxed">{comment}</p>
    </div>
  );
}
