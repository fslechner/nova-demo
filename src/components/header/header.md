### Header Component

#### NavLinks default align left

```jsx
const MemoryRouter = require("react-router").MemoryRouter;
import { navLinks } from "../../utils/data/navLinks";
console.log("test:", navLinks);
<MemoryRouter>
  <Header navLinks={navLinks} />
</MemoryRouter>;
```

#### NavLinks default align center

```jsx
const MemoryRouter = require("react-router").MemoryRouter;
import { navLinks } from "../../utils/data/navLinks";

<MemoryRouter>
  <Header navLinks={navLinks} navLinksAlign="center" />
</MemoryRouter>;
```

#### NavLinks default align right

```jsx
const MemoryRouter = require("react-router").MemoryRouter;
import { navLinks } from "../../utils/data/navLinks";

<MemoryRouter>
  <Header navLinks={navLinks} navLinksAlign="right" />
</MemoryRouter>;
```
