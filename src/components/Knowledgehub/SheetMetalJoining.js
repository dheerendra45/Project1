import React from 'react';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import p44 from '../../assets/knowledgehub/p44.jpg'
import p51 from '../../assets/knowledgehub/p51.jpg'
import p52 from '../../assets/knowledgehub/p52.jpg'
import p53 from '../../assets/knowledgehub/p53.jpg'

import p54 from '../../assets/knowledgehub/p54.jpg'
export default function SheetMetalJoining() {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="bg-black text-white p-6 rounded-lg mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium mb-2">Check out which surface finishes we offer</h2>
          <button className="flex items-center text-white hover:text-gray-300 transition-colors">
            <span className="mr-2">Go to page</span>
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="w-32 h-20 bg-gray-600 rounded flex items-center justify-center">
              <img src={p44} />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <span className="text-sm text-gray-600 font-medium">Part 5</span>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Joining sheet metal parts</h1>
          <p className="text-gray-700 mb-4">
            Once created, there are various approaches to joining sheet metal parts suited to different applications.
          </p>
          <p className="text-gray-700">
            This section quickly summarizes these approaches, including fastenings, welding, and soldering, and describes their advantages and disadvantages. There are also additional methods for{' '}
            <span className="text-orange-500 font-medium">joining sheet metal that don't require fasteners</span>{' '}
            like crimps, notches and tabs which rely more heavily on the part design, that are not mentioned in this list but may be relevant to explore.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <img src={p51} />
          </div>
        </div>
      </div>

      {/* Fasteners Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Fasteners</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Fasteners are hardware devices that mechanically join or affix two or more objects together. They are used to create non-permanent joints, as opposed to welding.
            </p>
            <p className="text-gray-700 mb-6">
              The most common type of fasteners for sheet metal are called{' '}
              <span className="text-blue-500 font-medium">PEM fasteners</span>. PEM is a brand that creates fasteners to provide threaded inserts and mounting points for sheet metal and PC boards.
            </p>
            <p className="text-gray-700 mb-6">
              There are several different categories of fasteners, including nuts, cable tie-mounts and hooks, inserts, studs and pins, standoffs, captive panel screws and hardware, weld nuts, and sheet-to-sheet attachments. All of these categories serve a slightly different purpose and there are multiple hardware options within the categories.
            </p>
            <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
              Explore the specific types of fasteners available in this overview
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-48 bg-gray-800 rounded-lg flex items-center justify-center">
               <img src={p52} />
            </div>
          </div>
        </div>

        {/* Fasteners Pros and Cons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="space-y-3">
            <div className="flex items-center text-green-600">
              <CheckCircle size={20} className="mr-3" />
              <span>Fast and easy</span>
            </div>
            <div className="flex items-center text-green-600">
              <CheckCircle size={20} className="mr-3" />
              <span>Affordable</span>
            </div>
            <div className="flex items-center text-green-600">
              <CheckCircle size={20} className="mr-3" />
              <span>Hardware (like screws) not permanent</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-red-600">
              <XCircle size={20} className="mr-3" />
              <span>Not as durable as welding</span>
            </div>
          </div>
        </div>
      </section>

      {/* Welding Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Welding</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              When joining and fastening sheet metal, one of the go-to techniques is definitely welding, which involves fusing parts together at high temperatures.{' '}
              <span className="text-orange-500 font-medium">MIG welding</span> and TIG welding are ideal when dealing with sheet metal, although other processes also work. Welding tends to warp and create heat zones that can be non-ideal for a finished product, but MIG and TIG welding help lessen these challenges.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                   <img src={p53} />
            </div>
          </div>
        </div>

        {/* Welding Pros and Cons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
          <div className="space-y-3">
            <div className="flex items-center text-green-600">
              <CheckCircle size={20} className="mr-3" />
              <span>Produces strong, durable joints</span>
            </div>
            <div className="flex items-center text-green-600">
              <CheckCircle size={20} className="mr-3" />
              <span>Compatible with wide range of materials</span>
            </div>
            <div className="flex items-center text-green-600">
              <CheckCircle size={20} className="mr-3" />
              <span>Inexpensive</span>
            </div>
            <div className="flex items-center text-green-600">
              <CheckCircle size={20} className="mr-3" />
              <span>Leak proof joint</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-red-600">
              <XCircle size={20} className="mr-3" />
              <span>Permanent (very hard to disassemble)</span>
            </div>
            <div className="flex items-center text-red-600">
              <XCircle size={20} className="mr-3" />
              <span>Heat exposure can lead to material distortion and reduce tensile strength</span>
            </div>
          </div>
        </div>
      </section>

      {/* Soldering Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Soldering</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              This process differs to welding because the base metal doesn't melt in the process. Instead, a filler metal is heated until molten and used to join two parts. Soldering copper tubes is a very common plumbing technique where the strength of a brazed joint is not necessary. Solder joints are usually not as strong due to the ductile nature of most solders and the melting point which is usually less than 450°C.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-48 bg-gray-300 rounded-lg flex items-center justify-center">
                  <img src={p54} />
            </div>
          </div>
        </div>

        {/* Soldering Pros and Cons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
          <div className="space-y-3">
            <div className="flex items-center text-green-600">
              <CheckCircle size={20} className="mr-3" />
              <span>Probability of deformation is very low</span>
            </div>
            <div className="flex items-center text-green-600">
              <CheckCircle size={20} className="mr-3" />
              <span>Can join a variety of materials</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-red-600">
              <XCircle size={20} className="mr-3" />
              <span>Not as strong as welding or brazing</span>
            </div>
            <div className="flex items-center text-red-600">
              <XCircle size={20} className="mr-3" />
              <span>Cannot join large sections</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}