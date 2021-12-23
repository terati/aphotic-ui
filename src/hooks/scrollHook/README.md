## Scroll Locking
---
category: Hooks
type: General
title: Hook to Disable/Enable Scrolling
---

Example Usage

```typescript
import useScrollHook from "aphotic-ui/scrollHook";

export default function App() {
  // can be arbitrary name. "disableScroll" example
  const [disableScroll] = useScrollHook();
  return (
    <div className="App" style={{ minHeight: "1000px" }}>
      <button onClick={() => disableScroll(true)}>Enable Scroll </button>

      <button onClick={() => disableScroll(false)}>Disable Scroll</button>
    </div>
  );
}

```