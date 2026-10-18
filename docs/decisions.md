# Product and Engineering Decisions

## 1. Use a static prototype before building a backend

Reason: the first risk is product comprehension. A static prototype makes the full loop testable without account setup.

Tradeoff: data is local and cannot be shared across devices.

## 2. Keep rules separate from generated explanations

Reason: a rule result should be reproducible even if its wording changes.

Tradeoff: the current prototype still keeps both in one file and needs extraction.

## 3. Do not infer product efficacy from one ingredient

Reason: concentration, formula, frequency and personal tolerance all affect the result.

Tradeoff: guidance must sometimes say “information is insufficient” instead of giving a clear answer.

## 4. Treat the observation as self-reported tracking, not a clinical trial

Reason: a single-arm 7-day record cannot establish causality.

Tradeoff: the product must communicate uncertainty and data completeness clearly.

## 5. Prefer a small set of actionable tools over more dashboards

Reason: the user needs a next action, not more decorative charts.

Tradeoff: some rich inventory analysis is deferred until real usage data exists.
