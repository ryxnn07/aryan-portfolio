"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import {
  FaGithub,
  FaBook,
  FaUsers,
} from "react-icons/fa";

interface GithubUser {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

export default function Github() {
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/ryxnn07")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(console.error);
  }, []);

  if (!user) {
    return (
      <section
        id="github"
        className="glass-card rounded-3xl p-8"
      >
        <h2 className="text-4xl font-bold">Loading GitHub...</h2>
      </section>
    );
  }

  return (
    <section
      id="github"
      className="glass-card rounded-3xl p-8"
    >
      <div className="mb-8">
        <p className="text-violet-400 uppercase tracking-widest text-sm">
          Open Source
        </p>

        <h2 className="text-4xl font-bold mt-2">
          GitHub Overview
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">

        {/* Profile Card */}

        <div className="bg-slate-900 rounded-2xl border border-white/10 p-6">

          <img
            src={user.avatar_url}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 border-violet-600"
          />

          <h3 className="text-2xl font-bold mt-5">
            {user.name}
          </h3>

          <p className="text-violet-400">
            @{user.login}
          </p>

          <p className="text-slate-400 mt-5 leading-7">
            {user.bio}
          </p>

          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-violet-600 hover:bg-violet-700 transition px-5 py-3 rounded-xl"
          >
            <FaGithub />

            Visit GitHub
          </a>

        </div>

        {/* Stats */}

        <div className="lg:col-span-2 grid md:grid-cols-3 gap-5">

          <div className="bg-slate-900 rounded-2xl border border-white/10 p-6">

            <FaBook className="text-violet-400 text-3xl mb-4" />

            <h3 className="text-4xl font-bold">
              {user.public_repos}
            </h3>

            <p className="text-slate-400">
              Repositories
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl border border-white/10 p-6">

            <FaUsers className="text-violet-400 text-3xl mb-4" />

            <h3 className="text-4xl font-bold">
              {user.followers}
            </h3>

            <p className="text-slate-400">
              Followers
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl border border-white/10 p-6">

            <FaUsers className="text-violet-400 text-3xl mb-4" />

            <h3 className="text-4xl font-bold">
              {user.following}
            </h3>

            <p className="text-slate-400">
              Following
            </p>

          </div>

        </div>

      </div>

      {/* Contribution Calendar */}

      <div className="bg-slate-900 rounded-2xl border border-white/10 p-6 overflow-x-auto">

        <GitHubCalendar
          username={user.login}
          colorScheme="dark"
          blockSize={14}
          blockMargin={5}
          fontSize={14}
        />

      </div>

    </section>
  );
}