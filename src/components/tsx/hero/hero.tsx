import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">
              Monitor your Kafka cluster{" "}
              <span class="font-medium">securely</span>
            </h1>
            <p class="text-slate-700 mt-6">
              As a top choice of event store and stream-processing platform,
              Apache Kafka offers developers a low-latency platform for data
              feeds. But what if you need to visualize and troubleshoot that
              data?
            </p>
            <p class="text-slate-700">
              That's where kafkaPRAAG comes in. We are a real-time monitoring
              tool for your Kafka clusters, allowing constantly updating metrics
              and the ability to manipulate your producers and message rate.
            </p>
            <p class="text-slate-700">Got any questions? We've got answers!</p>
            <div class="btn-group mt-6 sm:ml-4">
              <button class="btn btn-primary">
                <a href="https://github.com/oslabs-beta/progue-for-kafka">
                  Download
                </a>
              </button>
              <button class="btn btn-secondary">
                <a href="/docs">Quick start guide</a>
              </button>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
            <Image
              src="https://elasticbeanstalk-us-east-1-506029946825.s3.amazonaws.com/kafkascreen.png"
              layout="constrained"
              width={800}
              height={600}
              alt="image of kafka visualizer"
            />
          </div>
        </div>
      </div>
    </div>
  );
});
