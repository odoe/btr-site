---
title: What's new in TypeScript 3.5 RC
date: 2019-05-19
author: Rene Rubalcava
---

## What's new in TypeScript 3.5 RC

The latest release of [TypeScript 3.5 RC](https://devblogs.microsoft.com/typescript/announcing-typescript-3-5-rc/) is here, which means that 3.5 is right around the corner.
You should test your projects with it now, because they are probably broken, so fix 'em fast fool!

<!-- more -->

A cool feature coming to 3.5 is the `Omit` type, which isn't so much a type as it a type utility.
It basically let's you remove properties from a type.

```ts
interface Point3D {
	x: number;
	y: number;
	z: number;
}

// define a narrow type without a "z" property
const point2d: Omit<Point3D, "z"> = { x: 2, y: 3 };
```

That's pretty cool fool!

There's also some improved type inference for generic constructors, which means less typing for me when writing apps, so I can fully support that.

There's plenty more to come, but I haven't gone over all of it yet.

I'm ready for 3.5, so bring it on!