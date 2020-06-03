//
//  ViewController.swift
//  Ryukito_AR
//
//  Created by 又吉琉稀斗 on 2020/05/26.
//  Copyright © 2020 又吉琉稀斗. All rights reserved.
//

import UIKit
import SceneKit
import ARKit

class ViewController: UIViewController, ARSCNViewDelegate {

    @IBOutlet var sceneView: ARSCNView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //シーンビューのデリゲートになる
        sceneView.delegate = self
        //fpsなどを表示
        sceneView.showsStatistics = true
        //シーンを作る
        let scene = SCNScene()
        sceneView.scene = scene
        //ワイヤーフレームを表示
        sceneView.debugOptions = .showWireframe
        
        //球体を生成 --rediusは半径
        let sphere = SCNSphere(radius: 0.1)
        if let material = sphere.firstMaterial { // SCNMaterial
        //鏡面球体のパラメータ
        material.lightingModel = .physicallyBased // 物理ベースのレンダリング
        material.metalness.contents = 1.0
        material.metalness.intensity = 1.0
        material.roughness.intensity = 0.0
        }

        //目の前1メートルの場所に置く
        let sphereNode = SCNNode(geometry: sphere)
        sphereNode.position = SCNVector3(0, 0, -1)

        //AR空間に球体を追加
        sceneView.scene.rootNode.addChildNode(sphereNode)
    }
        
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        
        //セッションのコンフィグを作る
        let configuration = ARWorldTrackingConfiguration()
        //環境マッピングを有効にする
        configuration.environmentTexturing = .automatic
        //平面の検出を有効化 --今回は特に意味なし
        //configuration.planeDetection = .horizontal
        //セッションを開始
        sceneView.session.run(configuration)
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        
        //セッションを停止
        sceneView.session.pause()
    }
    
    // MARK: - ARSCNViewDelegate
    
    
        
    /*
        // Override to create and configure nodes for anchors added to the view's session.
        func renderer(_ renderer: SCNSceneRenderer, nodeFor anchor: ARAnchor) -> SCNNode? {
            let node = SCNNode()
         
            return node
        }
    */
        
        func session(_ session: ARSession, didFailWithError error: Error) {
            // Present an error message to the user
            
        }
        
        func sessionWasInterrupted(_ session: ARSession) {
            // Inform the user that the session has been interrupted, for example, by presenting an overlay
            
        }
        
        func sessionInterruptionEnded(_ session: ARSession) {
            // Reset tracking and/or remove existing anchors if consistent tracking is required
            
        }
    
}


