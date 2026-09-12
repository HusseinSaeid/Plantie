import * as Dialog from "@radix-ui/react-dialog";

export default function ProductDialog({
  product,
  children,
  open,
  onOpenChange,
}) {
  if (!product) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children && <Dialog.Trigger asChild>{children}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-bg-primary/50 backdrop-blur-sm transition-opacity" />

        <Dialog.Content className="bg-bg-surface border-accent-primary fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-51 w-[92%] max-w-2xl max-h-[90vh] p-8 rounded-md border overflow-y-auto flex flex-col gap-6 focus:outline-none">
          {product.picSrc && (
            <div className="relative w-full h-72 rounded-sm overflow-hidden bg-bg-primary border border-border-subtle">
              <img
                src={product.picSrc}
                alt={product.name}
                className="w-full h-full object-cover "
              />
            </div>
          )}

          <div>
            <Dialog.Title
              style={{ color: "var(--color-text-primary)" }}
              className="text-xl font-bold mb-2 tracking-tight"
            >
              {product.name}
            </Dialog.Title>

            <Dialog.Description
              style={{ color: "var(--color-text-secondary)" }}
              className="text-sm leading-relaxed"
            >
              {product.description}
            </Dialog.Description>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 mt-2 border-t border-border-subtle">
            <Dialog.Close asChild>
              <button className="btn btn-secondary">Close</button>
            </Dialog.Close>

            <button className="btn btn-primary">Order Now</button>
          </div>

          <Dialog.Close asChild>
            <button
              aria-label="Close"
              className="absolute top-1 right-2 flex items-center justify-center text-text-secondary! hover:text-accent-primary! transition-all focus:outline-none"
            >
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
