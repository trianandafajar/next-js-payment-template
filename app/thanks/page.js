import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h3 className="text-center">Terima kasih telah melakukan pembayaran</h3>
      <Link href="/" className="text-blue-600 hover:underline">
        Kembali
      </Link>
    </div>
  );
}
