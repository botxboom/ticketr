import { v, ConvexError } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getUserTicketForEvent = query({
  args: {
    eventId: v.id("events"),
    userId: v.string(),
  },
  handler: (ctx, { eventId, userId }) => {
    const ticket = ctx.db
      .query("tickets")
      .withIndex("by_user_event", (q) =>
        q.eq("userId", userId).eq("eventId", eventId)
      )
      .first();

    return ticket;
  },
});
