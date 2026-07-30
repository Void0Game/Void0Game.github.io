# VOID0 Landing-Page Brand Language and Copy

Status: **Accepted editorial contract**

Implementation: **Applied for v0.20.0**

## Source of truth

The game repository's
[Brand Language, Frame Naming, and Match Messaging](https://github.com/romajs/Void0/blob/main/docs/specs/brand-language-and-match-messaging.md)
specification is normative. This document records how that language applies to
the public landing page.

## Required brand lockup

The canonical product and tagline lockup is:

```text
VOID0
OUTRIDE THE VOID.
```

The browser title should become:

```text
Void0 — Outride the Void
```

The exact tagline should appear once in the primary hero or adjacent brand
lockup and once in the footer. Supporting campaign headlines must not be
presented as competing permanent taglines.

## Landing-page vocabulary

| Concept | Required term | Landing-page use |
| --- | --- | --- |
| Physical map or arena | `Frame` | `Tempest Frame` in v0.20.0; future map names only after release |
| Competitive format | `Circuit` | `Prime Circuit Solo` and ruleset context |
| Rider identity | `Signal` | Roster, status, progression, and lore |
| Lethal path | `Signal Trace`, `Trace` | Mechanic explanation and controls |
| Session connection | `Voidlink` | Authored system or transmission copy |
| Threat | `Void` | The consuming space beneath or within a Frame |

`The Grid` is retired as branded world language. Literal CSS, layout, shader,
or geometry terminology may still use lowercase `grid` internally.

## Approved supporting copy

These lines may remain or be reused:

- `Every turn leaves a weapon behind.`
- `Signals from the Void.`
- `Your movement becomes territory.`
- `Sixteen Signals.`

The canonical title-atmosphere line is:

```text
RECEIVING SIGNALS FROM THE VOID.
```

The complete approved in-game sequence is preserved here for campaign and
trailer consistency:

```text
VOIDLINK ESTABLISHED.
<FRAME NAME> FRAME SYNCHRONIZED.
3
2
1
START
VOIDLINK DESTABILIZING. SIGNALS FADING.
REBOOT LINK SEVERED. FINAL SIGNAL PROTOCOL INITIATED.
VOID ZERO.
```

## v0.20 release scope

The public v0.20.0 presentation covers **Prime Circuit Solo** on the
**Tempest Frame**. Team Battle and the proposed Singularity Frame are preserved
as post-v0.20 development tracks and must not be presented as shipped features.

`Enter the circuit` remains the approved action label. `Outrun the storm.
Become the Signal.` remains supporting campaign copy beneath the canonical
`OUTRIDE THE VOID.` tagline.

## Editorial rules

1. Write `VOID0` with a zero in display branding and `Void0` in normal prose.
2. Capitalize `Signal`, `Trace`, `Frame`, `Circuit`, `Void`, and `Voidlink`
   when they carry their defined product meanings.
3. Use `Tempest Frame` for the map shipped in v0.20.0; name future Frames only
   when their release scope is approved.
4. Use `Prime Circuit Solo` for the solo competitive format.
5. Keep download and play calls to action literal and understandable.
6. Do not invent a replacement for `ENTER THE CIRCUIT` until the game-side
   action label is separately approved.
7. Metadata, social cards, visible copy, alt text, and footer copy must follow
   the same vocabulary.

## Implementation checklist

- Update browser, canonical, Open Graph, and description copy.
- Establish the canonical tagline hierarchy in the hero.
- Replace branded `grid` language with the correct `Frame` wording.
- Distinguish Frame names from Circuit/ruleset names.
- Preserve clear download actions and accessible image descriptions.
- Update the footer tagline.
- Run `npm run build` and inspect the production output before publishing.
