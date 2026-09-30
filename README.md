
# 🎮 Escape the Grid - Update Pack

https://splendorous-raindrop-57b482.netlify.app/

This update adds a visible HOW TO PLAY screen, in-game help, 3 hints per level, automatic stuck hints after 45 seconds, mobile controls, keyboard controls, and score penalties for hints.

### A 100-Level Single-Player Escape & Survival Challenge

**Escape the Grid** is a browser-based single-player puzzle and survival game where every level challenges the player to navigate a dangerous grid, overcome obstacles, respond to sabotage, and reach the final escape point.

The game is designed around **progressive difficulty, exploration, quick decision-making, and adaptive gameplay**. Players aren't simply following the same route repeatedly — they must understand each level's objective, react to obstacles, and use hints when they become stuck.

---

## 🚀 Features

* 🎯 **100 Levels** with progressive difficulty
* 🧩 Different objectives and challenges across levels
* 🚧 Obstacles including walls, spikes, lasers, enemies, doors, portals and switches
* ⚠️ **Sabotage mechanics** that create additional challenges
* 💡 **3-level hint system** for players who get stuck
* ⏱️ Automatic hint assistance after extended inactivity
* 🏆 Score and level progression system
* 🔓 Levels unlock progressively
* 💾 Local progress saving using browser storage
* ⌨️ Keyboard controls
* 📱 Mobile-friendly touch controls
* 🔄 Level restart functionality
* 🌐 Fully browser-based
* ☁️ **Netlify-ready static deployment**
* 🖼️ Custom PNG game assets

---

# 🎮 How to Play

Your objective is simple:

> **Navigate the grid, overcome the level's obstacles and reach the exit.**

However, each level introduces its own combination of challenges.

### Keyboard Controls

| Key       | Action        |
| --------- | ------------- |
| `W` / `↑` | Move Up       |
| `A` / `←` | Move Left     |
| `S` / `↓` | Move Down     |
| `D` / `→` | Move Right    |
| `H`       | Get a Hint    |
| `R`       | Restart Level |

### Mobile

Use the on-screen directional buttons to move your player.

---

# 💡 Hint System

Getting stuck is part of the challenge.

Each level provides up to **3 progressive hints**:

### Hint 1 — General Clue

Provides a broad indication of what you should investigate.

### Hint 2 — Specific Clue

Narrows down the important location, obstacle or action.

### Hint 3 — Strong Clue

Provides a much more direct clue about how to progress.

Hints can also be triggered automatically when the player remains stuck for an extended period.

### ⚠️ Hint Penalty

Using hints can reduce your score, so players who solve levels independently can preserve more points.

---

# ⚠️ Sabotage

Escape the Grid isn't just about finding the exit.

Some levels introduce **sabotage events** that can change how the player approaches the challenge.

Possible threats include:

* 🔴 Laser hazards
* 👾 Enemy encounters
* 🧱 Blocking obstacles
* 🚪 Locked doors
* 🌀 Teleportation
* ⚡ Electrical hazards
* 🚨 Alarm situations
* 🌑 Limited visibility
* 🪤 Traps
* 🔀 Changing routes

The player must react rather than blindly repeat the same movement pattern.

---

# 🧩 Game Progression

The game contains **100 levels** with increasing difficulty.

```text
LEVEL 01 ──────────────── LEVEL 20
       Beginner → Intermediate

LEVEL 21 ──────────────── LEVEL 40
       Intermediate → Hard

LEVEL 41 ──────────────── LEVEL 60
       Hard → Advanced

LEVEL 61 ──────────────── LEVEL 80
       Advanced → Expert

LEVEL 81 ──────────────── LEVEL 99
       Expert → Nightmare

LEVEL 100
       THE FINAL ESCAPE
```

Players progressively encounter more complicated combinations of obstacles and sabotage.

---

# 🏆 Scoring

Your score is influenced by:

* Level completed
* Completion time
* Hints used
* Progress through the game

Try to complete levels quickly while minimizing unnecessary hints.

---

# 💾 Progress Saving

The game uses browser-based local storage to remember:

* Current unlocked level
* Score
* Progress

Your progress remains available when returning to the game from the same browser.

> Clearing browser/site data can remove locally stored progress.

---

# 📱 Mobile Support

Escape the Grid is designed to work on both:

* 💻 Desktop
* 📱 Mobile

On desktop, use the keyboard.

On mobile, use the on-screen controls.

---

# 🌐 Deployment

Escape the Grid is a **static web application**, so it does not require a backend server.

It can be deployed using platforms such as:

* Netlify
* GitHub Pages
* Vercel
* Other static hosting services

### Netlify Deployment

The project can be deployed directly using the project folder.

The folder should contain:

```text
escape-the-grid/
│
├── index.html
├── game.js
├── levels.js
├── levels.json
├── style.css
│
└── assets/
    ├── player.png
    ├── wall.png
    ├── exit.png
    ├── key.png
    ├── spike.png
    ├── laser.png
    ├── enemy.png
    ├── switch.png
    ├── portal.png
    ├── block.png
    ├── mirror.png
    ├── battery.png
    ├── alarm.png
    ├── dark.png
    └── door.png
```

No database or server configuration is required for the static version.

---

# 🛠️ Technologies Used

```text
HTML5
CSS3
JavaScript
HTML Canvas
PNG Assets
LocalStorage
Netlify
```

The game runs entirely in the browser.

---

# 📂 Project Structure

```text
Escape-the-Grid/
│
├── index.html
│       Main game interface
│
├── game.js
│       Game logic, controls,
│       movement, scoring and gameplay
│
├── levels.js
│       Level configuration
│
├── levels.json
│       Level data, objectives,
│       steps, sabotage and hints
│
├── style.css
│       Game interface and responsive styling
│
└── assets/
        Player and obstacle graphics
```

---

# 🎯 Game Objective

The ultimate objective is to complete all **100 levels** and escape the final grid.

Every successful level brings you closer to:

```text
╔════════════════════════════╗
║                            ║
║       THE FINAL GRID       ║
║                            ║
║       LEVEL 100            ║
║                            ║
║          ESCAPE            ║
║                            ║
╚════════════════════════════╝
```

**Can you escape all 100 levels?**

---

## 👨‍💻 Project

**Escape the Grid — V4/V5**

**Type:** Browser Game
**Mode:** Single Player
**Levels:** 100
**Platform:** Web
**Deployment:** Netlify
**Controls:** Keyboard + Touch
**Backend:** Not required
