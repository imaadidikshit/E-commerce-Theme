import os
import shutil
import time

def create_envato_package():
    # --- CONFIGURATION ---
    PROJECT_NAME = "Nebula_Ecommerce_Nextjs_v1"
    SOURCE_DIR = os.getcwd()  # Assumes script is run from project root
    
    # Define paths
    build_dir = os.path.join(SOURCE_DIR, PROJECT_NAME)
    template_dir = os.path.join(build_dir, "Template")
    docs_dir = os.path.join(build_dir, "Documentation")
    
    # HTML Content for Documentation/index.html
    INDEX_HTML_CONTENT = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documentation - Nebula E-commerce Theme</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 40px 20px; }
        h1 { border-bottom: 2px solid #eee; padding-bottom: 10px; }
        h2 { margin-top: 30px; color: #2563eb; }
        code { background: #f4f4f5; padding: 2px 5px; border-radius: 4px; font-family: monospace; }
        pre { background: #1e1e1e; color: #fff; padding: 15px; border-radius: 8px; overflow-x: auto; }
        .note { background: #e0f2fe; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; }
    </style>
</head>
<body>

    <h1>Nebula E-commerce Theme - Documentation</h1>
    <p>Thank you for purchasing our theme! This is a high-performance E-commerce template built with Next.js 14, Tailwind CSS, and Shadcn UI.</p>

    <h2>1. Requirements</h2>
    <ul>
        <li>Node.js (Version 18 or higher)</li>
        <li>NPM or Yarn</li>
    </ul>

    <h2>2. Installation</h2>
    <p>Follow these steps to get your project running locally:</p>
    
    <ol>
        <li>Unzip the <code>Template</code> folder.</li>
        <li>Open your terminal and navigate to the folder.</li>
        <li>Run the following command to install dependencies:</li>
    </ol>
    <pre>npm install</pre>

    <h2>3. Running the Project</h2>
    <p>Start the development server:</p>
    <pre>npm run dev</pre>
    <p>Open <code>http://localhost:3000</code> in your browser.</p>

    <h2>4. Customization</h2>
    <p>You can change global styles, colors, and fonts in:</p>
    <ul>
        <li><code>src/app/globals.css</code></li>
        <li><code>tailwind.config.ts</code></li>
    </ul>

    <h2>5. Detailed Guide</h2>
    <p>For more advanced details about the folder structure and components, please read the included <strong>DOCUMENTATION.md</strong> file (you can open it in any text editor or VS Code).</p>

    <div class="note">
        <strong>Need Support?</strong><br>
        If you have any questions, please contact us via our Envato profile page.
    </div>

    <p style="font-size: 0.9em; color: #666; margin-top: 50px;">&copy; 2024 Nebula Theme. All rights reserved.</p>

</body>
</html>"""

    print(f"📦 Starting packaging for: {PROJECT_NAME}")
    print("-" * 50)

    # 1. CLEANUP PREVIOUS BUILDS
    if os.path.exists(build_dir):
        print("   🧹 Removing old build folder...")
        shutil.rmtree(build_dir)
    if os.path.exists(f"{PROJECT_NAME}.zip"):
        print("   🧹 Removing old zip file...")
        os.remove(f"{PROJECT_NAME}.zip")

    # 2. CREATE DIRECTORY STRUCTURE
    print("   📂 Creating directory structure...")
    os.makedirs(template_dir)
    os.makedirs(docs_dir)

    # 3. COPY TEMPLATE FILES (Whitelist approach to avoid junk)
    files_to_copy = [
        "package.json",
        "package-lock.json",
        "next.config.ts",
        "tsconfig.json",
        "tailwind.config.ts",
        "postcss.config.mjs",
        "components.json",
        ".gitignore"
    ]

    print("   📝 Copying config files...")
    for filename in files_to_copy:
        src = os.path.join(SOURCE_DIR, filename)
        dst = os.path.join(template_dir, filename)
        if os.path.exists(src):
            shutil.copy2(src, dst)
        else:
            print(f"      ⚠️ Warning: {filename} missing in source.")

    # 4. COPY FOLDERS (SRC & PUBLIC)
    print("   file_folder Copying source code & assets...")
    
    # Copy public
    if os.path.exists(os.path.join(SOURCE_DIR, "public")):
        shutil.copytree(os.path.join(SOURCE_DIR, "public"), os.path.join(template_dir, "public"))
    
    # Copy src
    if os.path.exists(os.path.join(SOURCE_DIR, "src")):
        shutil.copytree(os.path.join(SOURCE_DIR, "src"), os.path.join(template_dir, "src"))
        
        # 5. REMOVE AI FOLDER (CLEANUP)
        ai_path = os.path.join(template_dir, "src", "ai")
        if os.path.exists(ai_path):
            print("   🤖 Removing 'src/ai' folder (Cleanup)...")
            shutil.rmtree(ai_path)
    
    # 6. CREATE CLEAN README FOR TEMPLATE
    print("   📄 Generating clean README for buyer...")
    with open(os.path.join(template_dir, "README.md"), "w") as f:
        f.write("# Nebula E-commerce Theme\n\n")
        f.write("Thank you for purchasing this template!\n\n")
        f.write("## Getting Started\n")
        f.write("1. Open this folder in your terminal.\n")
        f.write("2. Run `npm install`.\n")
        f.write("3. Run `npm run dev`.\n\n")
        f.write("Please check the `Documentation` folder for the full guide.")

    # 7. SETUP DOCUMENTATION FOLDER
    print("   📚 Setting up Documentation...")
    
    # Copy Markdown Guide
    doc_src = os.path.join(SOURCE_DIR, "DOCUMENTATION.md")
    if os.path.exists(doc_src):
        shutil.copy2(doc_src, os.path.join(docs_dir, "DOCUMENTATION.md"))
    
    # Copy docs folder if exists
    docs_folder_src = os.path.join(SOURCE_DIR, "docs")
    if os.path.exists(docs_folder_src):
        shutil.copytree(docs_folder_src, os.path.join(docs_dir, "docs"))
        
    # Create index.html
    with open(os.path.join(docs_dir, "index.html"), "w", encoding="utf-8") as f:
        f.write(INDEX_HTML_CONTENT)

    # 8. ZIP IT UP
    print("-" * 50)
    print("   🤐 Zipping everything...")
    shutil.make_archive(PROJECT_NAME, 'zip', root_dir=SOURCE_DIR, base_dir=PROJECT_NAME)
    
    print("-" * 50)
    print(f"✅ SUCCESS! Your file is ready: {PROJECT_NAME}.zip")
    print(f"   (You can upload this zip file directly to Envato)")

if __name__ == "__main__":
    create_envato_package()