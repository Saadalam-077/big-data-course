import React, { useState } from 'react';

const LabLesson = ({ labNum, user, onNavigate, onExerciseComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showExercise, setShowExercise] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const labData = {
    1: {
      title: "Introduction to Big Data",
      titleAr: "مقدمة في البيانات الضخمة",
      icon: "📊",
      videos: [
        { id: "bAyrObl7TYE", title: "What is Big Data?" },
        { id: "KCEPoPJ8sWw", title: "Big Data Explained" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 1", text: "Learn what Big Data is and why it matters in today's world." },
        { type: "concept", title: "What is Big Data?", text: "Big Data refers to extremely large datasets that cannot be processed by traditional methods.", points: ["Data too large for traditional databases", "Requires special tools to process", "Generated from many sources", "Used for analysis and insights"] },
        { type: "concept", title: "Sources of Big Data", text: "Big Data comes from everywhere:", points: ["Social media posts and interactions", "IoT sensors and devices", "Business transactions", "Scientific experiments", "Healthcare records", "Web browsing activity"] },
        { type: "concept", title: "Why Big Data Matters", text: "Big Data enables:", points: ["Better business decisions", "Scientific discoveries", "Personalized recommendations", "Fraud detection", "Healthcare improvements", "Smart cities"] }
      ],
      exercises: [
        { q: "Big Data is characterized by:", options: ["Small size", "Easy to process", "Extremely large datasets", "Single source"], correct: 2 },
        { q: "Which is a source of Big Data?", options: ["Handwritten notes", "Social media", "Single spreadsheet", "Paper documents"], correct: 1 },
        { q: "Big Data requires:", options: ["Traditional databases", "Special processing tools", "Only Excel", "No storage"], correct: 1 },
        { q: "Big Data helps in:", options: ["Making decisions worse", "Better insights", "Reducing data", "Hiding information"], correct: 1 },
        { q: "IoT stands for:", options: ["Internet of Things", "Input of Text", "Internal Operations", "Integer of Time"], correct: 0 }
      ]
    },
    2: {
      title: "Big Data Characteristics (5 V's)",
      titleAr: "خصائص البيانات الضخمة",
      icon: "🔄",
      videos: [
        { id: "TzxmjbL-i4Y", title: "5 V's of Big Data" },
        { id: "9s0-mPCR6-Y", title: "Big Data Characteristics Explained" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 2", text: "Learn the 5 V's that define Big Data characteristics." },
        { type: "concept", title: "The 5 V's of Big Data", text: "Big Data is defined by five main characteristics:", points: ["Volume - Amount of data", "Velocity - Speed of data generation", "Variety - Different types of data", "Veracity - Quality and accuracy", "Value - Usefulness of data"] },
        { type: "concept", title: "Volume", text: "The sheer amount of data generated:", points: ["Petabytes and Exabytes of data", "2.5 quintillion bytes daily", "Growing exponentially", "Requires distributed storage"] },
        { type: "concept", title: "Velocity", text: "Speed at which data is generated:", points: ["Real-time data streams", "Social media posts per second", "Stock market transactions", "Sensor data continuously"] },
        { type: "concept", title: "Variety", text: "Different forms of data:", points: ["Structured (databases, spreadsheets)", "Unstructured (text, images, videos)", "Semi-structured (JSON, XML)", "From multiple sources"] }
      ],
      exercises: [
        { q: "How many V's define Big Data?", options: ["3", "4", "5", "6"], correct: 2 },
        { q: "Volume refers to:", options: ["Speed", "Amount of data", "Types", "Quality"], correct: 1 },
        { q: "Velocity means:", options: ["Data size", "Data speed", "Data types", "Data value"], correct: 1 },
        { q: "Unstructured data includes:", options: ["Spreadsheets", "Databases", "Videos and images", "Tables"], correct: 2 },
        { q: "Veracity refers to:", options: ["Volume", "Speed", "Quality/accuracy", "Value"], correct: 2 }
      ]
    },
    3: {
      title: "Hadoop Ecosystem",
      titleAr: "نظام Hadoop البيئي",
      icon: "🐘",
      videos: [
        { id: "aReuLtY0YMI", title: "Hadoop Tutorial for Beginners" },
        { id: "mafw2-CVYnA", title: "Hadoop Ecosystem Explained" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 3", text: "Learn about Apache Hadoop and its ecosystem components." },
        { type: "concept", title: "What is Hadoop?", text: "Apache Hadoop is an open-source framework for Big Data:", points: ["Distributed storage and processing", "Runs on commodity hardware", "Fault-tolerant and scalable", "Created by Yahoo! in 2006"] },
        { type: "concept", title: "Core Components", text: "Hadoop has four main modules:", points: ["HDFS - Distributed file storage", "MapReduce - Processing framework", "YARN - Resource management", "Hadoop Common - Utilities"] },
        { type: "concept", title: "Ecosystem Tools", text: "Tools built around Hadoop:", points: ["Hive - SQL-like queries", "Pig - Data flow scripting", "HBase - NoSQL database", "Spark - Fast processing", "Sqoop - Data transfer", "Flume - Log collection"] }
      ],
      exercises: [
        { q: "Hadoop was created by:", options: ["Google", "Facebook", "Yahoo!", "Amazon"], correct: 2 },
        { q: "HDFS stands for:", options: ["High Data File System", "Hadoop Distributed File System", "Hard Drive File Storage", "Hybrid Data Framework"], correct: 1 },
        { q: "Hadoop is:", options: ["Closed source", "Open source", "Paid only", "Windows only"], correct: 1 },
        { q: "Hive provides:", options: ["File storage", "SQL-like queries", "Resource management", "Log collection"], correct: 1 },
        { q: "YARN manages:", options: ["Files", "Resources", "Queries", "Logs"], correct: 1 }
      ]
    },
    4: {
      title: "HDFS - Hadoop File System",
      titleAr: "نظام ملفات Hadoop",
      icon: "📁",
      videos: [
        { id: "GJYEsEEfjvk", title: "HDFS Tutorial" },
        { id: "1_ly9dZnmWc", title: "HDFS Architecture Explained" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 4", text: "Understand how HDFS stores and manages Big Data." },
        { type: "concept", title: "HDFS Architecture", text: "HDFS uses master-slave architecture:", points: ["NameNode - Master, manages metadata", "DataNodes - Slaves, store actual data", "Block-based storage (128MB default)", "Replication for fault tolerance"] },
        { type: "concept", title: "Key Features", text: "HDFS characteristics:", points: ["Write once, read many times", "High throughput access", "Fault tolerant (3x replication)", "Scalable to thousands of nodes"] },
        { type: "code", title: "Basic HDFS Commands", code: "# List files\nhdfs dfs -ls /user/data\n\n# Create directory\nhdfs dfs -mkdir /user/mydata\n\n# Copy file to HDFS\nhdfs dfs -put localfile.txt /user/mydata/\n\n# Read file from HDFS\nhdfs dfs -cat /user/mydata/file.txt\n\n# Delete file\nhdfs dfs -rm /user/mydata/file.txt", text: "Common HDFS shell commands" }
      ],
      exercises: [
        { q: "NameNode manages:", options: ["Actual data", "Metadata", "Processing", "Queries"], correct: 1 },
        { q: "Default HDFS block size:", options: ["64MB", "128MB", "256MB", "512MB"], correct: 1 },
        { q: "Default replication factor:", options: ["1", "2", "3", "4"], correct: 2 },
        { q: "Command to list HDFS files:", options: ["hdfs ls", "hdfs dfs -ls", "hdfs list", "hdfs show"], correct: 1 },
        { q: "HDFS is designed for:", options: ["Small files", "Random writes", "Large files", "Low latency"], correct: 2 }
      ]
    },
    5: {
      title: "MapReduce Fundamentals",
      titleAr: "أساسيات MapReduce",
      icon: "🗺️",
      videos: [
        { id: "cHGaQz0E7AU", title: "MapReduce Explained Simply" },
        { id: "cvhKoniK5Uo", title: "MapReduce Tutorial" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 5", text: "Learn how MapReduce processes Big Data in parallel." },
        { type: "concept", title: "What is MapReduce?", text: "MapReduce is a programming model:", points: ["Divide and conquer approach", "Map phase - processes data in parallel", "Shuffle - groups data by key", "Reduce phase - aggregates results"] },
        { type: "concept", title: "Map Phase", text: "The Map function:", points: ["Reads input data", "Processes key-value pairs", "Outputs intermediate key-value pairs", "Runs in parallel on all nodes"] },
        { type: "concept", title: "Reduce Phase", text: "The Reduce function:", points: ["Receives grouped data by key", "Aggregates or combines values", "Outputs final results", "Example: count, sum, average"] },
        { type: "concept", title: "Word Count Example", text: "Classic MapReduce example:", points: ["Map: Each word becomes (word, 1)", "Shuffle: Groups by word", "Reduce: Sums counts for each word", "Output: (word, total_count)"] }
      ],
      exercises: [
        { q: "MapReduce has how many phases?", options: ["1", "2 (Map and Reduce)", "3", "4"], correct: 1 },
        { q: "Map phase processes data:", options: ["Sequentially", "In parallel", "Randomly", "Not at all"], correct: 1 },
        { q: "Shuffle phase:", options: ["Processes data", "Groups by key", "Stores data", "Deletes data"], correct: 1 },
        { q: "Reduce phase:", options: ["Splits data", "Aggregates results", "Reads files", "Creates files"], correct: 1 },
        { q: "In word count, Map outputs:", options: ["(word, count)", "(word, 1)", "(1, word)", "(count, word)"], correct: 1 }
      ]
    },
    6: {
      title: "Introduction to Apache Spark",
      titleAr: "مقدمة في Apache Spark",
      icon: "⚡",
      videos: [
        { id: "QaoJNXW6SQo", title: "Apache Spark Tutorial for Beginners" },
        { id: "znBa13Earms", title: "What is Apache Spark?" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 6", text: "Discover Apache Spark - the lightning-fast Big Data engine." },
        { type: "concept", title: "What is Apache Spark?", text: "Spark is a fast, unified analytics engine:", points: ["100x faster than MapReduce", "In-memory processing", "Supports multiple languages", "Unified platform for various workloads"] },
        { type: "concept", title: "Spark vs MapReduce", text: "Why Spark is faster:", points: ["In-memory computation", "DAG execution engine", "Lazy evaluation", "No disk I/O between stages"] },
        { type: "concept", title: "Spark Components", text: "Spark ecosystem includes:", points: ["Spark Core - Basic functionality", "Spark SQL - Structured data", "Spark Streaming - Real-time", "MLlib - Machine learning", "GraphX - Graph processing"] },
        { type: "code", title: "Basic Spark Code", code: "# Initialize Spark\nfrom pyspark.sql import SparkSession\nspark = SparkSession.builder.appName('MyApp').getOrCreate()\n\n# Read data\ndf = spark.read.csv('data.csv', header=True)\n\n# Show data\ndf.show()\n\n# Count rows\ndf.count()", text: "Simple PySpark example" }
      ],
      exercises: [
        { q: "Spark is how much faster than MapReduce?", options: ["10x", "50x", "100x", "1000x"], correct: 2 },
        { q: "Spark processes data:", options: ["On disk", "In memory", "On tape", "Externally"], correct: 1 },
        { q: "Spark SQL handles:", options: ["Unstructured data", "Structured data", "Binary data", "Audio data"], correct: 1 },
        { q: "MLlib is for:", options: ["SQL queries", "Streaming", "Machine learning", "Graph processing"], correct: 2 },
        { q: "Spark supports which language?", options: ["Only Java", "Only Python", "Multiple languages", "Only Scala"], correct: 2 }
      ]
    },
    7: {
      title: "Spark RDDs and DataFrames",
      titleAr: "RDDs و DataFrames",
      icon: "📋",
      videos: [
        { id: "jg7Z8ctKpEs", title: "Spark RDD Tutorial" },
        { id: "K_iCSB_cCLY", title: "Spark DataFrames Explained" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 7", text: "Learn about Spark's core data structures." },
        { type: "concept", title: "What is RDD?", text: "Resilient Distributed Dataset:", points: ["Immutable collection of objects", "Distributed across cluster", "Fault tolerant", "Supports parallel operations"] },
        { type: "concept", title: "RDD Operations", text: "Two types of operations:", points: ["Transformations - Create new RDD (map, filter)", "Actions - Return results (count, collect)", "Lazy evaluation - Only computed when needed", "Lineage for fault recovery"] },
        { type: "concept", title: "DataFrames", text: "Higher-level abstraction:", points: ["Table-like structure with columns", "Optimized query execution", "Schema enforcement", "SQL-like operations"] },
        { type: "code", title: "RDD vs DataFrame", code: "# RDD Example\nrdd = spark.sparkContext.parallelize([1,2,3,4,5])\nrdd.map(lambda x: x*2).collect()\n\n# DataFrame Example\ndf = spark.createDataFrame([(1,'John'), (2,'Jane')], ['id','name'])\ndf.filter(df.id > 1).show()", text: "Comparing RDD and DataFrame" }
      ],
      exercises: [
        { q: "RDD stands for:", options: ["Random Data Distribution", "Resilient Distributed Dataset", "Real Data Drive", "Remote Database"], correct: 1 },
        { q: "RDDs are:", options: ["Mutable", "Immutable", "Changeable", "Editable"], correct: 1 },
        { q: "Transformations create:", options: ["Actions", "New RDDs", "Errors", "Files"], correct: 1 },
        { q: "Actions return:", options: ["New RDDs", "Results to driver", "Nothing", "Errors"], correct: 1 },
        { q: "DataFrames have:", options: ["No structure", "Column structure", "No schema", "Random format"], correct: 1 }
      ]
    },
    8: {
      title: "NoSQL Databases",
      titleAr: "قواعد بيانات NoSQL",
      icon: "🗄️",
      videos: [
        { id: "0buKQHokLK8", title: "NoSQL Databases Explained" },
        { id: "xQnIN9bW0og", title: "Types of NoSQL Databases" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 8", text: "Explore NoSQL databases for Big Data applications." },
        { type: "concept", title: "What is NoSQL?", text: "NoSQL = Not Only SQL:", points: ["Non-relational databases", "Flexible schema", "Horizontal scaling", "High performance"] },
        { type: "concept", title: "Types of NoSQL", text: "Four main categories:", points: ["Document (MongoDB) - JSON documents", "Key-Value (Redis) - Simple pairs", "Column-family (Cassandra) - Wide columns", "Graph (Neo4j) - Relationships"] },
        { type: "concept", title: "NoSQL vs SQL", text: "Key differences:", points: ["Schema: Flexible vs Fixed", "Scaling: Horizontal vs Vertical", "ACID vs BASE consistency", "Best for unstructured data"] },
        { type: "concept", title: "MongoDB Example", text: "Popular document database:", points: ["Stores JSON-like documents", "Flexible schema", "Rich query language", "Used by many companies"] }
      ],
      exercises: [
        { q: "NoSQL stands for:", options: ["No SQL at all", "Not Only SQL", "New SQL", "Next SQL"], correct: 1 },
        { q: "MongoDB stores:", options: ["Tables", "Documents", "Graphs", "Key-value pairs"], correct: 1 },
        { q: "Redis is what type?", options: ["Document", "Key-Value", "Graph", "Column"], correct: 1 },
        { q: "NoSQL scaling is:", options: ["Vertical", "Horizontal", "None", "Diagonal"], correct: 1 },
        { q: "Neo4j is for:", options: ["Documents", "Key-Value", "Graphs", "Columns"], correct: 2 }
      ]
    },
    9: {
      title: "Data Visualization",
      titleAr: "تصور البيانات",
      icon: "📈",
      videos: [
        { id: "5Zg-C8AAIGg", title: "Data Visualization Basics" },
        { id: "C4LLYJp8qEU", title: "Data Visualization Tools" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 9", text: "Learn to visualize Big Data insights effectively." },
        { type: "concept", title: "Why Visualization?", text: "Data visualization is essential:", points: ["Makes patterns visible", "Communicates insights", "Enables quick decisions", "Tells data stories"] },
        { type: "concept", title: "Chart Types", text: "Common visualization types:", points: ["Bar charts - Comparisons", "Line charts - Trends over time", "Pie charts - Proportions", "Scatter plots - Relationships", "Heat maps - Density", "Dashboards - Multiple views"] },
        { type: "concept", title: "Visualization Tools", text: "Popular tools for Big Data:", points: ["Tableau - Business intelligence", "Power BI - Microsoft tool", "Apache Superset - Open source", "Matplotlib/Seaborn - Python", "D3.js - Web visualizations"] },
        { type: "concept", title: "Best Practices", text: "Effective visualization tips:", points: ["Choose right chart type", "Keep it simple", "Use colors meaningfully", "Label clearly", "Tell a story"] }
      ],
      exercises: [
        { q: "Best chart for trends over time:", options: ["Pie chart", "Bar chart", "Line chart", "Scatter plot"], correct: 2 },
        { q: "Tableau is a:", options: ["Database", "Visualization tool", "Programming language", "File system"], correct: 1 },
        { q: "Pie charts show:", options: ["Trends", "Proportions", "Correlations", "Distributions"], correct: 1 },
        { q: "D3.js creates visualizations for:", options: ["Desktop", "Mobile", "Web", "Print"], correct: 2 },
        { q: "Dashboard shows:", options: ["Single chart", "Multiple views", "Only text", "No data"], correct: 1 }
      ]
    },
    10: {
      title: "Big Data Project",
      titleAr: "مشروع البيانات الضخمة",
      icon: "🚀",
      videos: [
        { id: "fY2Syy9UMMA", title: "Big Data Project Ideas" },
        { id: "S2y4jiaIvYc", title: "Building a Big Data Pipeline" }
      ],
      content: [
        { type: "intro", title: "Welcome to Lab 10", text: "Apply everything you've learned in a complete project." },
        { type: "concept", title: "Project Phases", text: "Big Data project lifecycle:", points: ["1. Define problem and goals", "2. Collect and ingest data", "3. Store data (HDFS, NoSQL)", "4. Process data (Spark, MapReduce)", "5. Analyze and visualize", "6. Present insights"] },
        { type: "concept", title: "Data Pipeline", text: "Building a complete pipeline:", points: ["Data sources (APIs, files, streams)", "Ingestion tools (Kafka, Flume)", "Storage layer (HDFS, S3)", "Processing layer (Spark)", "Visualization layer (Tableau)"] },
        { type: "concept", title: "Project Ideas", text: "Beginner-friendly projects:", points: ["Social media sentiment analysis", "Sales data analytics", "Weather data visualization", "Log analysis system", "Recommendation system"] },
        { type: "concept", title: "Best Practices", text: "Tips for success:", points: ["Start small, scale up", "Document everything", "Use version control", "Test thoroughly", "Focus on insights, not just data"] }
      ],
      exercises: [
        { q: "First step in Big Data project:", options: ["Visualize", "Define problem", "Process data", "Store data"], correct: 1 },
        { q: "Kafka is used for:", options: ["Storage", "Visualization", "Data ingestion", "Analysis"], correct: 2 },
        { q: "Data pipeline includes:", options: ["Only storage", "Only processing", "Multiple stages", "Only visualization"], correct: 2 },
        { q: "Version control helps with:", options: ["Data storage", "Code management", "Visualization", "Processing speed"], correct: 1 },
        { q: "Final goal of Big Data project:", options: ["Store data", "Process data", "Generate insights", "Delete data"], correct: 2 }
      ]
    }
  };

  const lab = labData[labNum];
  if (!lab) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p>Lab {labNum} coming soon!</p>
          <button onClick={() => onNavigate('home')} className="mt-4 px-6 py-2 bg-purple-600 rounded-lg">Back</button>
        </div>
      </div>
    );
  }

  const totalSteps = lab.content.length + 2;

  const handleAnswer = (qi, ai) => { if (!submitted) setAnswers({...answers, [qi]: ai}); };

  const handleSubmit = () => {
    let c = 0;
    lab.exercises.forEach((e, i) => { if (answers[i] === e.correct) c++; });
    const s = Math.round((c / lab.exercises.length) * 100);
    setScore(s);
    setSubmitted(true);
    onExerciseComplete(labNum, s);
  };

  if (showExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 text-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Lab {labNum} Exercise | تمرين المعمل {labNum}</h2>
          </div>
          {!submitted ? (
            <div className="space-y-6">
              {lab.exercises.map((ex, i) => (
                <div key={i} className="bg-slate-700/30 rounded-xl p-4">
                  <p className="text-white font-semibold mb-3">{i+1}. {ex.q}</p>
                  <div className="space-y-2">
                    {ex.options.map((opt, j) => (
                      <button key={j} onClick={() => handleAnswer(i, j)} className={`w-full text-left px-4 py-2 rounded-lg ${answers[i] === j ? 'bg-purple-600' : 'bg-slate-800 hover:bg-slate-700'}`}>
                        {String.fromCharCode(65+j)}. {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={handleSubmit} disabled={Object.keys(answers).length < 5} className="w-full py-3 bg-emerald-600 rounded-xl font-bold disabled:opacity-50">Submit | إرسال</button>
            </div>
          ) : (
            <div className="text-center">
              <div className={`p-8 rounded-2xl mb-6 ${score >= 60 ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                <p className="text-5xl mb-2">{score >= 60 ? '🎉' : '😔'}</p>
                <p className="text-4xl font-bold">{score}%</p>
                <p className="text-slate-400 mt-2">{score >= 60 ? 'Great job! | أحسنت!' : 'Keep trying! | حاول مرة أخرى!'}</p>
              </div>
              <div className="space-y-3 mb-6 text-left">
                {lab.exercises.map((ex, i) => (
                  <div key={i} className={`p-3 rounded-lg ${answers[i] === ex.correct ? 'bg-emerald-900/30' : 'bg-red-900/30'}`}>
                    <p>{i+1}. {ex.q}</p>
                    <p className="text-sm">{answers[i] === ex.correct ? '✓ Correct' : `✗ Answer: ${ex.options[ex.correct]}`}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => onNavigate('home')} className="px-6 py-3 bg-purple-600 rounded-xl">Back to Course | العودة للدورة</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (currentStep === lab.content.length) {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Video Tutorials | فيديوهات تعليمية</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {lab.videos.map((v, i) => (
              <div key={i} className="bg-slate-700/30 rounded-xl overflow-hidden">
                <div className="aspect-video">
                  <iframe src={`https://www.youtube.com/embed/${v.id}`} title={v.title} className="w-full h-full" allowFullScreen></iframe>
                </div>
                <p className="p-3 font-semibold">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (currentStep === lab.content.length + 1) {
      return (
        <div className="p-6 text-center">
          <p className="text-5xl mb-4">✅</p>
          <h2 className="text-2xl font-bold mb-2">Lab Complete!</h2>
          <p className="text-purple-300/70 font-arabic mb-6">اكتمل المعمل!</p>
          <button onClick={() => setShowExercise(true)} className="px-8 py-4 bg-emerald-600 rounded-xl font-bold text-lg">Start Exercise | ابدأ التمرين</button>
        </div>
      );
    }
    const c = lab.content[currentStep];
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <span className="px-3 py-1 bg-purple-600/30 rounded-full text-purple-300 text-sm">{c.type === 'code' ? '💻 Code' : '📖 Concept'}</span>
          <h2 className="text-2xl font-bold mt-4">{c.title}</h2>
        </div>
        {c.text && <div className="bg-slate-700/30 rounded-xl p-6 mb-6"><p>{c.text}</p></div>}
        {c.points && <div className="bg-slate-700/30 rounded-xl p-6 mb-6">{c.points.map((p,i) => <p key={i} className="mb-2">✓ {p}</p>)}</div>}
        {c.code && <div className="bg-slate-900 rounded-xl p-6 mb-6 overflow-x-auto"><pre className="text-cyan-300 font-mono text-sm whitespace-pre-wrap">{c.code}</pre></div>}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 text-white flex flex-col">
      <header className="bg-slate-800/80 border-b border-slate-700 p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => onNavigate('home')} className="px-3 py-2 bg-slate-700 rounded-lg">← Back</button>
            <div>
              <h1 className="font-bold">Lab {labNum}: {lab.title}</h1>
              <p className="text-xs text-purple-300/70 font-arabic">{lab.titleAr}</p>
            </div>
          </div>
          <span className="text-3xl">{lab.icon}</span>
        </div>
      </header>
      <div className="bg-slate-800/50 border-b border-slate-700 px-4 py-2">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>Step {currentStep + 1} / {totalSteps}</span>
            <span>{Math.round(((currentStep+1)/totalSteps)*100)}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 transition-all" style={{width: `${((currentStep+1)/totalSteps)*100}%`}}></div>
          </div>
        </div>
      </div>
      <div className="flex-1">{renderContent()}</div>
      <div className="bg-slate-800/80 border-t border-slate-700 p-4 sticky bottom-0">
        <div className="max-w-6xl mx-auto flex justify-between">
          <button onClick={() => setCurrentStep(Math.max(0, currentStep-1))} disabled={currentStep === 0} className={`px-6 py-2 rounded-lg ${currentStep === 0 ? 'bg-slate-700 text-slate-500' : 'bg-slate-700 hover:bg-slate-600'}`}>← Previous</button>
          {currentStep < totalSteps - 1 ? (
            <button onClick={() => setCurrentStep(currentStep+1)} className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg">Next →</button>
          ) : (
            <button onClick={() => setShowExercise(true)} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg">Take Exercise | ابدأ التمرين</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabLesson;
