function SimpleAvatar() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 sm:flex-row">
      <div className="flex h-8 w-8 items-start justify-center overflow-hidden rounded-full border border-slate-800 bg-slate-50 shadow-[2.5px_3.5px_0px_rgba(0,0,0,1)] lg:cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar Image"
          className="aspect-square h-full w-full object-cover"
        />
      </div>
      <div className="flex h-10 w-10 items-start justify-center overflow-hidden rounded-full border border-slate-800 bg-slate-50 shadow-[2.858px_4px_0px_rgba(0,0,0,1)] lg:cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar Image"
          className="aspect-square h-full w-full object-cover"
        />
      </div>
      <div className="flex h-12 w-12 items-start justify-center overflow-hidden rounded-full border border-slate-800 bg-slate-50 shadow-[3.34px_4.67px_0px_rgba(0,0,0,1)] lg:cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar Image"
          className="aspect-square h-full w-full object-cover"
        />
      </div>
      <div className="flex h-14 w-14 items-start justify-center overflow-hidden rounded-full border border-slate-800 bg-slate-50 shadow-[4px_5.6px_0px_rgba(0,0,0,1)] lg:cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar Image"
          className="aspect-square h-full w-full object-cover"
        />
      </div>
      <div className="flex h-16 w-16 items-start justify-center overflow-hidden rounded-full border border-slate-800 bg-slate-50 shadow-[5px_7px_0px_rgba(0,0,0,1)] lg:cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar Image"
          className="aspect-square h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default SimpleAvatar;
