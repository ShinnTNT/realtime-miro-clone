"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";

import { ChangeEvent, useEffect, useState } from "react";
import qs from "query-string";

import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const [debouncedValue] = useDebounceValue(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        placeholder="Search Boards"
        className="w-full max-w-[516px] pl-9"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
