import React from "react";

interface Params {
  username: string;
}

export default function Page({ params }: { params: Promise<Params> }) {
  const param = React.use(params)
  return <div>{param.username} profile page</div>;
}
