# LibreChat Updating Dependencies

> Only update `package.json` files. **Never manually edit `package-lock.json`**, npm handles that automatically.

---

## 1. Clear Caches & node_modules

Remove all `node_modules` folders and `.turbo` cache recursively from the project root:

```powershell
@("node_modules", ".turbo") | ForEach-Object {
    Get-ChildItem -Path "." -Recurse -Filter $_ -Directory | Remove-Item -Recurse -Force
}
```

---

## 2. Reinstall Dependencies

This regenerates all `package-lock.json` files to match your updated `package.json`:

```powershell
npm install
```

---

## 3. Rebuild Frontend

```powershell
npm run frontend:dev
```

---

## 4. Start Backend

```powershell
npm run backend:dev
```