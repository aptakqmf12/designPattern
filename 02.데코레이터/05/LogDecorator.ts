export function Log<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  const methodName = context.name;

  return function (this: This, ...args: Args): Return {
    console.log(`LOG: ${methodName.toString()}`);

    return originalMethod.call(this, ...args);
  };
}
